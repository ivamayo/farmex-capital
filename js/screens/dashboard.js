export const html = `
<div class="kpi-grid">
  <div class="kpi gold"><div class="kpi-top"><span class="kpi-lbl">Crédito disponible</span><div class="kpi-ico gold">💳</div></div><div class="kpi-val">S/ 38,400</div><div class="kpi-ch up">↑ +12% vs mes anterior</div></div>
  <div class="kpi green"><div class="kpi-top"><span class="kpi-lbl">Hectáreas activas</span><div class="kpi-ico green">🌿</div></div><div class="kpi-val">32 ha</div><div class="kpi-ch neu">Palta Hass · La Libertad</div></div>
  <div class="kpi blue"><div class="kpi-top"><span class="kpi-lbl">Score Farmex</span><div class="kpi-ico blue">⭐</div></div><div class="kpi-val">760</div><div class="kpi-ch up">↑ +15 pts · Muy Bueno</div></div>
  <div class="kpi orange"><div class="kpi-top"><span class="kpi-lbl">Precio palta hoy</span><div class="kpi-ico orange">🥑</div></div><div class="kpi-val">S/ 4.20</div><div class="kpi-ch up">↑ +3.2% · FOB Paita</div></div>
</div>
<div class="g60">
  <div class="card">
    <div class="ch"><div><div class="ct">Ciclo de Campaña · Palta Hass 2026</div><div class="cs">Etapa 4 de 8 — Engorde de fruto</div></div><span class="badge by">En curso</span></div>
    <div class="cyc-track"><div class="cyc-ph done"></div><div class="cyc-ph done"></div><div class="cyc-ph done"></div><div class="cyc-ph active"></div><div class="cyc-ph"></div><div class="cyc-ph"></div><div class="cyc-ph"></div><div class="cyc-ph"></div></div>
    <div class="cyc-lbls"><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span></div>
    <div class="cyc-info">
      <div class="ci-box"><div class="ci-val">4 / 8</div><div class="ci-lbl">Etapa actual</div></div>
      <div class="ci-box"><div class="ci-val">112 días</div><div class="ci-lbl">Para cosecha</div></div>
      <div class="ci-box"><div class="ci-val">~128 TM</div><div class="ci-lbl">Proyección</div></div>
    </div>
  </div>
  <div class="card">
    <div class="ch"><div class="ct">Alertas activas</div><span class="badge br">3 nuevas</span></div>
    <div class="al-list">
      <div class="al warn"><div class="al-dot warn"></div><div><div class="al-txt">Ventana óptima Crédito Campaña — 3 semanas</div><div class="al-t">Hace 2 días</div></div></div>
      <div class="al err"><div class="al-dot err"></div><div><div class="al-txt">Lluvias +40% en La Libertad esta semana</div><div class="al-t">Hoy · 08:14 am</div></div></div>
      <div class="al ok"><div class="al-dot ok"></div><div><div class="al-txt">Seguro paramétrico activado automáticamente</div><div class="al-t">Hoy · 08:15 am</div></div></div>
      <div class="al inf"><div class="al-dot inf"></div><div><div class="al-txt">AgroExport SAC confirmó 18 TM palta Cal.14</div><div class="al-t">Hace 5 días</div></div></div>
    </div>
  </div>
</div>
<div class="g2">
  <div class="card">
    <div class="ch"><div><div class="ct">Precio Palta Hass · Tendencia 6 meses</div><div class="cs">FOB Puerto Paita · S/ por kg</div></div><span class="badge bg">↑ Alcista</span></div>
    <div class="ch-wrap"><canvas id="ch-precios"></canvas></div>
  </div>
  <div class="card">
    <div class="ch"><div><div class="ct">Índices de Mercado</div><div class="cs">Actualizado hoy · Fuente MIDAGRI</div></div></div>
    <div class="px-grid">
      <div class="px"><div class="px-crop">🥑 Palta Hass</div><div class="px-val">4.20 <span class="px-unit">S//kg</span></div><div class="px-ch up">↑ +3.2% mensual</div></div>
      <div class="px"><div class="px-crop">🫐 Arándano</div><div class="px-val">12.50 <span class="px-unit">S//kg</span></div><div class="px-ch dn">↓ -1.8% mensual</div></div>
      <div class="px"><div class="px-crop">💵 USD/PEN</div><div class="px-val">3.75 <span class="px-unit">S/</span></div><div class="px-ch up">↑ +0.5% semanal</div></div>
      <div class="px"><div class="px-crop">📦 Exportaciones</div><div class="px-val">+12% <span class="px-unit">YoY</span></div><div class="px-ch up">↑ Tendencia +</div></div>
    </div>
  </div>
</div>
<div class="g60">
  <div class="card">
    <div class="ch"><div class="ct">Créditos activos</div><span class="badge by">2 activos</span></div>
    <div class="cr-item"><div class="cr-ico">💧</div><div class="cr-info"><div class="cr-name">Crédito Riego</div><div class="cr-det">Cuota 3/18 · Vence 25 May</div><div class="cr-bar"><div class="cr-fill" style="width:17%"></div></div></div><div class="cr-amt"><div class="cr-v">S/ 256,000</div><div class="cr-s">S/ 1,840/mes</div></div></div>
    <div class="cr-item"><div class="cr-ico">🌱</div><div class="cr-info"><div class="cr-name">Crédito Fertilización</div><div class="cr-det">Cuota 6/8 · Vence 1 Jun</div><div class="cr-bar"><div class="cr-fill" style="width:75%"></div></div></div><div class="cr-amt"><div class="cr-v">S/ 144,000</div><div class="cr-s">S/ 21,600/mes</div></div></div>
  </div>
  <div class="card">
    <div class="ch"><div class="ct">Acciones rápidas</div></div>
    <div class="act-grid">
      <div class="act" data-go="creditos"><div class="act-ico">💳</div><div class="act-lbl">Solicitar crédito</div></div>
      <div class="act" data-go="mercado"><div class="act-ico">🤝</div><div class="act-lbl">Ver compradores</div></div>
      <div class="act" data-go="scoring"><div class="act-ico">📊</div><div class="act-lbl">Mi score</div></div>
      <div class="act" data-go="clima"><div class="act-ico">🌦️</div><div class="act-lbl">Clima &amp; riesgos</div></div>
    </div>
  </div>
</div>
`;

export function init() {
  new Chart(document.getElementById('ch-precios').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Dic','Ene','Feb','Mar','Abr','May'],
      datasets: [{ label:'S//kg', data:[3.60,3.75,3.90,4.00,4.07,4.20],
        borderColor:'#C8961E', backgroundColor:'rgba(200,150,30,.08)',
        borderWidth:2.5, pointBackgroundColor:'#C8961E', pointRadius:4, tension:.4, fill:true }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:11 } } },
               y:{ grid:{ color:'#EEF2EE' }, ticks:{ font:{ size:11 }, callback: v => 'S/ '+v.toFixed(2) }, min:3.4, max:4.5 } } }
  });

  document.querySelectorAll('.act[data-go]').forEach(el => {
    el.addEventListener('click', () => window.goScreen(el.dataset.go));
  });
}
