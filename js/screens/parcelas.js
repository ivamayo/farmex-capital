export const html = `
<div class="stitle">🌱 Mis Parcelas</div>
<div class="par-grid">
  <div class="par">
    <div class="par-h"><div><div class="par-n">Parcela Norte — Virú</div><div class="par-ha">18 ha · Palta Hass</div></div><span class="par-st st-ok">Activa</span></div>
    <div class="ch-wrap" style="height:130px;"><canvas id="ch-par1"></canvas></div>
    <div class="par-stats"><div><div class="ps-v">72 TM</div><div class="ps-l">Proyección</div></div><div><div class="ps-v">4.0 kg/m²</div><div class="ps-l">Rendimiento</div></div><div><div class="ps-v">Etapa 4</div><div class="ps-l">Ciclo</div></div></div>
  </div>
  <div class="par">
    <div class="par-h"><div><div class="par-n">Parcela Sur — Ascope</div><div class="par-ha">14 ha · Palta Hass</div></div><span class="par-st st-w">⚠ Alerta climática</span></div>
    <div class="ch-wrap" style="height:130px;"><canvas id="ch-par2"></canvas></div>
    <div class="par-stats"><div><div class="ps-v">56 TM</div><div class="ps-l">Proyección</div></div><div><div class="ps-v">4.0 kg/m²</div><div class="ps-l">Rendimiento</div></div><div><div class="ps-v">Etapa 4</div><div class="ps-l">Ciclo</div></div></div>
  </div>
</div>
`;

const barOpts = (color) => ({
  type: 'bar',
  data: { labels:['Feb','Mar','Abr','May','Jun'], datasets:[{ data:[12,18,22,28,20], backgroundColor:color, borderRadius:4 }] },
  options: { responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ display:false } },
    scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:10 } } }, y:{ grid:{ color:'#F5F5F5' }, ticks:{ font:{ size:10 } } } } }
});

export function init() {
  new Chart(document.getElementById('ch-par1').getContext('2d'), barOpts('rgba(45,122,79,.7)'));
  new Chart(document.getElementById('ch-par2').getContext('2d'), barOpts('rgba(200,150,30,.7)'));
}
