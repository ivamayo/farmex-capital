export const html = `
<!-- Header -->
<div class="enc-hero">
  <div class="enc-hero-inner">
    <div class="enc-tag">📋 Validación de Propuesta de Valor · Farmex Capital 2026</div>
    <h1 class="enc-title">Ayúdanos a construir<br>la solución que necesitas</h1>
    <p class="enc-sub">Estamos desarrollando una plataforma financiera especializada para productores de palta y arándano. Tu opinión define el producto. <strong>Toma solo 5 minutos.</strong></p>
  </div>
</div>

<!-- Layout principal -->
<div class="enc-layout">

  <!-- IZQUIERDA: Contexto + Registro -->
  <div class="enc-left">

    <div class="card" style="margin-bottom:16px;">
      <div class="ch"><div class="ct">🌿 ¿De qué trata esta encuesta?</div></div>
      <p style="font-size:13px;color:var(--txt-s);line-height:1.75;margin-bottom:16px;">
        Estamos desarrollando una solución para productores de palta y arándano que busca mejorar su acceso a <strong>financiamiento, mercado de exportación, asesoría técnica y estabilidad financiera</strong>.
      </p>
      <p style="font-size:13px;color:var(--txt-s);line-height:1.75;margin-bottom:16px;">
        La propuesta incluye:
      </p>
      <div class="enc-prop-list">
        <div class="enc-prop"><span class="enc-prop-ico">💰</span><div><strong>Financiamiento por etapa productiva</strong><br><span>Fertilización, riego, cosecha y exportación</span></div></div>
        <div class="enc-prop"><span class="enc-prop-ico">👨‍🌾</span><div><strong>Acompañamiento técnico</strong><br><span>Agrónomos especializados en palta y arándano</span></div></div>
        <div class="enc-prop"><span class="enc-prop-ico">🤝</span><div><strong>Conexión directa con mercados</strong><br><span>Exportadores, supermercados e importadores</span></div></div>
        <div class="enc-prop"><span class="enc-prop-ico">📊</span><div><strong>Estabilidad financiera</strong><br><span>Mejora del flujo de caja y precios de venta</span></div></div>
      </div>
      <div class="enc-note">
        👉 En base a esta propuesta, responde las preguntas del formulario.
      </div>
    </div>

    <!-- Mini registro -->
    <div class="card" style="margin-bottom:16px;">
      <div class="ch"><div><div class="ct">👤 Regístrate para acceder al portal</div><div class="cs">Datos básicos para personalizar tu experiencia</div></div></div>
      <div class="enc-form" id="enc-register-form">
        <div class="enc-form-group">
          <label class="enc-label">Nombre completo</label>
          <input class="enc-input" type="text" id="reg-nombre" placeholder="Ej: Raúl García Mendoza">
        </div>
        <div class="enc-form-group">
          <label class="enc-label">WhatsApp</label>
          <input class="enc-input" type="text" id="reg-wsp" placeholder="+51 999 999 999">
        </div>
        <div class="enc-form-row">
          <div class="enc-form-group">
            <label class="enc-label">Región</label>
            <select class="enc-select" id="reg-region">
              <option value="">Seleccionar...</option>
              <option>La Libertad</option>
              <option>Ica</option>
              <option>Piura</option>
              <option>Lambayeque</option>
              <option>Ancash</option>
              <option>Otra</option>
            </select>
          </div>
          <div class="enc-form-group">
            <label class="enc-label">Cultivo principal</label>
            <select class="enc-select" id="reg-cultivo">
              <option value="">Seleccionar...</option>
              <option>Palta Hass</option>
              <option>Arándano</option>
              <option>Ambos</option>
            </select>
          </div>
        </div>
        <div class="enc-form-group">
          <label class="enc-label">Hectáreas</label>
          <input class="enc-input" type="number" id="reg-ha" placeholder="Ej: 25" min="1">
        </div>
        <button class="enc-btn-register" id="btn-registrar" onclick="registrarProductor()">
          Registrarme y responder encuesta →
        </button>
      </div>
      <div class="enc-success" id="enc-success" style="display:none;">
        <div class="enc-success-ico">✅</div>
        <div class="enc-success-msg">¡Registro exitoso!</div>
        <div class="enc-success-sub">Ahora responde la encuesta en el panel derecho. Cuando termines, tendrás acceso completo al portal.</div>
        <button class="enc-btn-portal" onclick="window.goScreen('dashboard')">Ir a mi Dashboard →</button>
      </div>
    </div>

    <!-- Estadísticas de participación -->
    <div class="card">
      <div class="ch"><div class="ct">📈 Participación</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;">
          <div style="font-size:22px;font-weight:700;color:var(--g-dark);">47</div>
          <div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Productores registrados</div>
        </div>
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;">
          <div style="font-size:22px;font-weight:700;color:var(--g-mid);">38</div>
          <div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Encuestas completadas</div>
        </div>
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;">
          <div style="font-size:22px;font-weight:700;color:var(--gold);">5 min</div>
          <div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Tiempo promedio</div>
        </div>
      </div>
    </div>

  </div>

  <!-- DERECHA: Google Form embebido -->
  <div class="enc-right">
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="background:var(--g-dark);padding:14px 20px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:18px;">📋</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:#fff;">Encuesta de Validación · Farmex Capital</div>
          <div style="font-size:11px;color:rgba(255,255,255,.5);">Tiempo estimado: 5 minutos</div>
        </div>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfxNrYuoAuzdgOubdrUX6CsM7-a7lxbxyDhVwhmL5oX2yuZQg/viewform?embedded=true"
        width="100%"
        height="720"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style="display:block;"
      >Cargando encuesta…</iframe>
    </div>
  </div>

</div>
`;

export function init() {
  if (window.registrarProductor) return;
  window.registrarProductor = function () {
    const nombre  = document.getElementById('reg-nombre').value.trim();
    const region  = document.getElementById('reg-region').value;
    const cultivo = document.getElementById('reg-cultivo').value;
    const ha      = document.getElementById('reg-ha').value;
    const wsp     = document.getElementById('reg-wsp').value.trim();

    if (!nombre || !region || !cultivo || !ha || !wsp) {
      alert('Por favor completa todos los campos antes de continuar.');
      return;
    }

    // Update sidebar user info
    const ucName = document.querySelector('.uc-name');
    const ucRole = document.querySelector('.uc-role');
    if (ucName) ucName.textContent = nombre;
    if (ucRole) ucRole.textContent = `${region} · ${ha} ha · ${cultivo}`;

    // Update topbar
    const tbSub = document.getElementById('tb-sub');
    if (tbSub) tbSub.textContent = `Bienvenido/a, ${nombre.split(' ')[0]} — Completa la encuesta para acceder al portal`;

    document.getElementById('enc-register-form').style.display = 'none';
    document.getElementById('enc-success').style.display = 'flex';
  };
}
