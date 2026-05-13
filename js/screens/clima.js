export const html = `
<div class="stitle">🌤️ Clima y Riesgos · La Libertad</div>
<div class="wth-grid">
  <div class="wth"><div class="wth-day">Hoy</div><div class="wth-ico">⛅</div><div class="wth-t">22°C</div><div class="wth-d">Parcialmente nublado</div></div>
  <div class="wth"><div class="wth-day">Mañana</div><div class="wth-ico">🌧️</div><div class="wth-t">19°C</div><div class="wth-d">Lluvias moderadas</div></div>
  <div class="wth"><div class="wth-day">Jueves</div><div class="wth-ico">🌦️</div><div class="wth-t">21°C</div><div class="wth-d">Chubascos aislados</div></div>
  <div class="wth"><div class="wth-day">Viernes</div><div class="wth-ico">☀️</div><div class="wth-t">25°C</div><div class="wth-d">Soleado</div></div>
</div>
<div class="card" style="margin-bottom:18px;">
  <div class="ch"><div><div class="ct">Precipitaciones proyectadas · Próximas 4 semanas</div><div class="cs">mm por semana · La Libertad</div></div><span class="badge br">⚠ Riesgo alto sem. 2</span></div>
  <div class="ch-wrap"><canvas id="ch-clima"></canvas></div>
</div>
<div class="stitle">⚠️ Análisis de Riesgos</div>
<div class="risk-grid">
  <div class="risk"><div class="risk-h"><div class="risk-ico">🌧️</div><div class="risk-t">Riesgo de lluvias excesivas</div></div><div class="rlvl alto">● ALTO</div><div class="risk-d">Probabilidad del 68% de lluvias sobre umbral normal los próximos 10 días. Riesgo en floración tardía y postcosecha temprana. <strong>Seguro paramétrico activado.</strong></div></div>
  <div class="risk"><div class="risk-h"><div class="risk-ico">🌡️</div><div class="risk-t">Variación de temperatura</div></div><div class="rlvl medio">● MEDIO</div><div class="risk-d">Oscilaciones de 8–12°C entre día y noche. Puede afectar el calibre del fruto en etapa de engorde. Monitoreo satelital activo.</div></div>
  <div class="risk"><div class="risk-h"><div class="risk-ico">💨</div><div class="risk-t">Vientos / Fenómeno El Niño</div></div><div class="rlvl bajo">● BAJO</div><div class="risk-d">Índice ONI actual: +0.4°C. Sin alerta activa. Condiciones dentro de rangos históricos normales para esta época del año.</div></div>
  <div class="risk"><div class="risk-h"><div class="risk-ico">🛡️</div><div class="risk-t">Cobertura de seguro</div></div><div class="rlvl bajo">● PROTEGIDO</div><div class="risk-d">Seguro paramétrico activo para 32 ha. Activación automática al superar umbral de 45mm/24h. Pago garantizado en 72 horas.</div></div>
</div>
`;

export function init() {
  new Chart(document.getElementById('ch-clima').getContext('2d'), {
    type: 'bar',
    data: { labels: ['Semana 1','Semana 2','Semana 3','Semana 4'],
      datasets: [{ label:'Precipitación (mm)', data:[28,52,38,15],
        backgroundColor:['rgba(41,128,185,.6)','rgba(231,76,60,.75)','rgba(243,156,18,.65)','rgba(39,174,96,.65)'],
        borderRadius: 6 }] },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:12 } } },
               y:{ grid:{ color:'#EEF2EE' }, ticks:{ font:{ size:11 }, callback: v => v+' mm' } } } }
  });
}
