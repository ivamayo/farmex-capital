const SUPABASE_URL  = 'https://zvleepucmfpkedyxyeol.supabase.co';
const SUPABASE_ANON = 'sb_publishable_Tl_gqh-uYy-VBhwM7aIHRw_aKz-Cczj';

// Cliente Supabase (sin dependencias, usando la REST API directamente)
export const db = {
  url:  SUPABASE_URL,
  key:  SUPABASE_ANON,

  // Helper para fetch con headers de Supabase
  async query(table, options = {}) {
    const { select = '*', filters = [], order, limit, body, method = 'GET' } = options;
    let url = `${SUPABASE_URL}/rest/v1/${table}?select=${select}`;
    filters.forEach(f => { url += `&${f}`; });
    if (order) url += `&order=${order}`;
    if (limit) url += `&limit=${limit}`;

    const res = await fetch(url, {
      method,
      headers: {
        'apikey':        SUPABASE_ANON,
        'Authorization': `Bearer ${SUPABASE_ANON}`,
        'Content-Type':  'application/json',
        'Prefer':        method === 'POST' ? 'return=representation' : '',
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) throw new Error(await res.text());
    return res.status === 204 ? null : res.json();
  },

  async insert(table, data) {
    return this.query(table, { method: 'POST', body: data });
  },

  async update(table, data, filter) {
    const url = `${SUPABASE_URL}/rest/v1/${table}?${filter}`;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'apikey':        SUPABASE_ANON,
        'Authorization': `Bearer ${SUPABASE_ANON}`,
        'Content-Type':  'application/json',
        'Prefer':        'return=representation',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};

// Auth helpers
export const auth = {
  async register(email, password, metadata = {}) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, data: metadata }),
    });
    const data = await res.json();
    if (data.user) saveSession(data);
    return data;
  },

  async login(email, password) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.access_token) saveSession(data);
    return data;
  },

  logout() {
    localStorage.removeItem('farmex_session');
    window.location.reload();
  },

  getUser() {
    const s = getSession();
    return s ? s.user : null;
  },

  getToken() {
    const s = getSession();
    return s ? s.access_token : null;
  },

  isLoggedIn() {
    return !!this.getToken();
  },
};

function saveSession(data) {
  localStorage.setItem('farmex_session', JSON.stringify({
    access_token: data.access_token,
    user:         data.user,
    expires_at:   Date.now() + (data.expires_in || 3600) * 1000,
  }));
}

function getSession() {
  try {
    const s = JSON.parse(localStorage.getItem('farmex_session') || 'null');
    if (!s || s.expires_at < Date.now()) return null;
    return s;
  } catch { return null; }
}
