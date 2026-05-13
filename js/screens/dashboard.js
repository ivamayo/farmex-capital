export const html = `
<!-- Bienvenida -->
<div class="dash-welcome">
  <div class="dash-welcome-left">
    <div class="dash-greeting">Buenos días, Raúl 👋</div>
    <div class="dash-date">Miércoles 13 de Mayo, 2026 · La Libertad, Perú</div>
  </div>
  <div class="dash-weather-pill">
    <span class="dash-w-ico">🌧️</span>
    <div>
      <div class="dash-w-temp">19°C · Lluvias moderadas</div>
      <div class="dash-w-alert">⚠️ Tu seguro paramétrico está activado</div>
    </div>
  </div>
</div>

<!-- Lo más importante hoy -->
<div class="dash-section-lbl">¿Qué pasa hoy en tu finca?</div>
<div class="dash-status-grid">
  <div class="dash-status-card green">
    <div class="dsc-ico">🌱</div>
    <div class="dsc-body">
      <div class="dsc-title">Tu campaña va bien</div>
      <div class="dsc-desc">Estás en la etapa de <strong>engorde de fruto</strong>. Todo en orden.</div>
      <div class="dsc-tag">Cosecha en 112 días · Ago–Sep 2026</div>
    </div>
  </div>
  <div class="dash-status-card gold">
    <div class="dsc-ico">💰</div>
    <div class="dsc-body">
      <div class="dsc-title">Tienes crédito disponible</div>
      <div class="dsc-desc">Puedes solicitar hasta <strong>S/ 38,400</strong> hoy mismo.</div>
      <div class="dsc-tag">Crédito Campaña disponible · Aprovecha esta semana</div>
    </div>
  </div>
  <div class="dash-status-card blue">
    <div class="dsc-ico">🥑</div>
    <div class="dsc-body">
      <div class="dsc-title">Precio de palta hoy</div>
      <div class="dsc-desc"><strong>S/ 4.20 por kg</strong> FOB Paita — subió esta semana.</div>
      <div class="dsc-tag">↑ +3.2% vs mes anterior · Buen momento</div>
    </div>
  </div>
  <div class="dash-status-card red">
    <div class="dsc-ico">☁️</div>
    <div class="dsc-body">
      <div class="dsc-title">Alerta de lluvias</div>
      <div class="dsc-desc">Lluvias <strong>+40% sobre lo normal</strong> esta semana en tu zona.</div>
      <div class="dsc-tag">✅ Seguro paramétrico activado automáticamente</div>
    </div>
  </div>
</div>

<!-- Ciclo de campaña visual -->
<div class="card" style="margin-bottom:18px;">
  <div class="ch"><div><div class="ct">📅 Tu ciclo de campaña · Palta Hass 2026</div><div class="cs">Estás en la etapa 4. Quedan 4 etapas para la cosecha.</div></div><span class="badge by">En curso</span></div>
  <div class="dash-cycle-visual">
    <div class="dcv-step done"><div class="dcv-ico">✅</div><div class="dcv-lbl">Poda</div><div class="dcv-mes">Feb</div></div>
    <div class="dcv-line done"></div>
    <div class="dcv-step done"><div class="dcv-ico">✅</div><div class="dcv-lbl">Floración</div><div class="dcv-mes">Mar</div></div>
    <div class="dcv-line done"></div>
    <div class="dcv-step done"><div class="dcv-ico">✅</div><div class="dcv-lbl">Cuajado</div><div class="dcv-mes">Abr</div></div>
    <div class="dcv-line active"></div>
    <div class="dcv-step active"><div class="dcv-ico">🔄</div><div class="dcv-lbl">Engorde</div><div class="dcv-mes">May</div></div>
    <div class="dcv-line"></div>
    <div class="dcv-step"><div class="dcv-ico">💊</div><div class="dcv-lbl">Nutrición</div><div class="dcv-mes">Jun</div></div>
    <div class="dcv-line"></div>
    <div class="dcv-step"><div class="dcv-ico">✂️</div><div class="dcv-lbl">Cosecha</div><div class="dcv-mes">Ago</div></div>
    <div class="dcv-line"></div>
    <div class="dcv-step"><div class="dcv-ico">📦</div><div class="dcv-lbl">Empaque</div><div class="dcv-mes">Sep</div></div>
    <div class="dcv-line"></div>
    <div class="dcv-step"><div class="dcv-ico">🚢</div><div class="dcv-lbl">Exportar</div><div class="dcv-mes">Oct</div></div>
  </div>
</div>

<!-- Tareas y acciones -->
<div class="g2">
  <div class="card">
    <div class="ch"><div class="ct">📋 Lo que necesitas hacer esta semana</div></div>
    <div class="dash-task-list">
      <div class="dash-task urgent">
        <div class="dt-ico">⚡</div>
        <div class="dt-body">
          <div class="dt-title">Solicitar Crédito Campaña ahora</div>
          <div class="dt-desc">La ventana óptima se cierra en 3 semanas. No la pierdas.</div>
        </div>
        <button class="dt-btn" data-go="creditos">Ir →</button>
      </div>
      <div class="dash-task normal">
        <div class="dt-ico">👨‍🌾</div>
        <div class="dt-body">
          <div class="dt-title">Visita técnica confirmada</div>
          <div class="dt-desc">Ing. Quispe · Jueves 22 May, 8:00 am · Parcela Norte</div>
        </div>
      </div>
      <div class="dash-task normal">
        <div class="dt-ico">💳</div>
        <div class="dt-body">
          <div class="dt-title">Cuota de Crédito Riego</div>
          <div class="dt-desc">S/ 1,840 · Vence en 12 días · Pago automático activo</div>
        </div>
      </div>
      <div class="dash-task tip">
        <div class="dt-ico">💡</div>
        <div class="dt-body">
          <div class="dt-title">Sube tu certificado de posesión</div>
          <div class="dt-desc">Con ese documento tu score sube +25 puntos y accedes a mejores tasas.</div>
        </div>
        <button class="dt-btn" data-go="scoring">Ver score →</button>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="ch"><div class="ct">🚀 ¿Qué quieres hacer?</div></div>
    <div class="dash-actions-big">
      <button class="dab" data-go="creditos">
        <div class="dab-ico">💳</div>
        <div class="dab-lbl">Pedir un crédito</div>
        <div class="dab-sub">6 tipos disponibles</div>
      </button>
      <button class="dab" data-go="vitrina">
        <div class="dab-ico">🌿</div>
        <div class="dab-lbl">Mostrar mi finca</div>
        <div class="dab-sub">Comparte con compradores</div>
      </button>
      <button class="dab" data-go="mercado">
        <div class="dab-ico">🤝</div>
        <div class="dab-lbl">Ver compradores</div>
        <div class="dab-sub">3 activos hoy</div>
      </button>
      <button class="dab" data-go="clima">
        <div class="dab-ico">🌦️</div>
        <div class="dab-lbl">Ver el clima</div>
        <div class="dab-sub">Alerta activa</div>
      </button>
      <button class="dab" data-go="scoring">
        <div class="dab-ico">⭐</div>
        <div class="dab-lbl">Mi puntuación</div>
        <div class="dab-sub">760 / 1000</div>
      </button>
      <button class="dab" data-go="servicios">
        <div class="dab-ico">🛠️</div>
        <div class="dab-lbl">Nuestros servicios</div>
        <div class="dab-sub">Todo lo que ofrecemos</div>
      </button>
    </div>
  </div>
</div>
`;

export function init() {
  document.querySelectorAll('[data-go]').forEach(el => {
    el.addEventListener('click', () => window.goScreen(el.dataset.go));
  });
}
