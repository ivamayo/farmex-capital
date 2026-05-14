import * as encuesta   from './screens/encuesta.js';
import * as dashboard  from './screens/dashboard.js';
import * as servicios  from './screens/servicios.js';
import * as parcelas   from './screens/parcelas.js';
import * as creditos   from './screens/creditos.js';
import * as mercado    from './screens/mercado.js';
import * as scoring    from './screens/scoring.js';
import * as clima      from './screens/clima.js';
import * as vitrina    from './screens/vitrina.js';

const SCREENS = { encuesta, dashboard, servicios, parcelas, creditos, mercado, scoring, clima, vitrina };

const TITLES = {
  encuesta:  ['Mi Perfil', 'Raúl García Mendoza · La Libertad · 32 ha · Palta Hass'],
  dashboard: ['Mi Finca',              'Buenos días, Raúl — Campaña Palta Hass 2026 en curso'],
  servicios: ['Nuestros Servicios',    'Quiénes somos y qué ofrecemos en Farmex Capital'],
  parcelas:  ['Mis Hectáreas',         '2 áreas activas · La Libertad · 32 ha en total'],
  creditos:  ['Créditos',              'Productos disponibles y simulador de crédito agrícola'],
  mercado:   ['Mercado',               'Precios en tiempo real y compradores activos'],
  scoring:   ['Mi Score',              'Scoring Agrícola Farmex AI · 760 / 1000'],
  clima:     ['Clima & Riesgos',       'La Libertad · Actualizado hace 2 horas'],
  vitrina:   ['Mi Vitrina',            'Comparte tu perfil verificado con compradores e importadores'],
};

/* Mount all screens as empty containers on startup */
function mountScreens() {
  const content = document.getElementById('app-content');
  Object.keys(SCREENS).forEach(id => {
    const div = document.createElement('div');
    div.className = 'screen';
    div.id = 'screen-' + id;
    content.appendChild(div);
  });
}

/* Navigate to a screen, lazily rendering it on first visit */
const rendered = new Set();

function goScreen(id) {
  if (!SCREENS[id]) return;

  // Lazy render
  if (!rendered.has(id)) {
    document.getElementById('screen-' + id).innerHTML = SCREENS[id].html;
    rendered.add(id);
    SCREENS[id].init();
  }

  // Swap active screen
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');

  // Swap active nav item
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  const btn = document.querySelector(`.ni[data-screen="${id}"]`);
  if (btn) btn.classList.add('active');

  // Update topbar
  const [title, sub] = TITLES[id];
  document.getElementById('tb-title').textContent = title;
  document.getElementById('tb-sub').textContent   = sub;
}

/* Expose globally so inline data-go attrs can call it */
window.goScreen = goScreen;

/* Boot */
mountScreens();
goScreen('dashboard');

/* Wire sidebar buttons */
document.querySelectorAll('.ni[data-screen]').forEach(btn => {
  btn.addEventListener('click', () => goScreen(btn.dataset.screen));
});
