export const html = `
<div class="stitle">📈 Índices de Mercado</div>
<div class="idx-grid">
  <div class="idx"><div class="idx-n">🥑 Palta Hass FOB</div><div class="idx-v">4.20 <span class="idx-u">S//kg</span></div><div class="idx-c up">↑ +3.2% vs mes ant.</div></div>
  <div class="idx"><div class="idx-n">🫐 Arándano FOB</div><div class="idx-v">12.50 <span class="idx-u">S//kg</span></div><div class="idx-c dn">↓ -1.8% vs mes ant.</div></div>
  <div class="idx"><div class="idx-n">💵 Tipo de cambio</div><div class="idx-v">3.75 <span class="idx-u">S//$</span></div><div class="idx-c up">↑ +0.5% semanal</div></div>
  <div class="idx"><div class="idx-n">📦 Exportación agro</div><div class="idx-v">+12% <span class="idx-u">YoY</span></div><div class="idx-c up">↑ Tendencia positiva</div></div>
</div>
<div class="card" style="margin-bottom:18px;">
  <div class="ch"><div><div class="ct">Tendencia de precios · Últimos 6 meses</div><div class="cs">Palta Hass y Arándano · S/ por kg</div></div></div>
  <div class="ch-wrap" style="height:220px;"><canvas id="ch-mercado"></canvas></div>
</div>
<div class="stitle">🤝 Compradores activos</div>
<div class="buyer-grid">
  <div class="buyer"><div class="buyer-type">Exportador · Verificado ✓</div><div class="buyer-n">AgroExport SAC</div><div class="buyer-p">S/ 4.20 <span>/kg · FOB Paita</span></div><div class="buyer-tag">Contrato disponible</div><div class="buyer-d">Busca: Palta Hass Cal. 12–16<br>Volumen: 15–25 TM<br>Entrega: Jun–Ago 2026<br>Pago: 30 días contra BL</div><button class="btn-c">Conectar →</button></div>
  <div class="buyer" style="border-left-color:var(--info);"><div class="buyer-type" style="color:var(--info);">Industria · Procesadora</div><div class="buyer-n">Inca Foods Perú</div><div class="buyer-p">S/ 2.80 <span>/kg · Puerta planta</span></div><div class="buyer-tag">Reduce pérdidas 20–30%</div><div class="buyer-d">Busca: Palta calibre libre<br>Volumen: 40–80 TM<br>Evita mermas por rechazo<br>Pago: Contado 15 días</div><button class="btn-c">Conectar →</button></div>
  <div class="buyer" style="border-left-color:var(--gold);"><div class="buyer-type" style="color:var(--gold);">Exportador · Premium</div><div class="buyer-n">BlueBerry Export Perú</div><div class="buyer-p">S/ 12.50 <span>/kg · FOB Lima</span></div><div class="buyer-tag" style="background:#FDF3DC;color:var(--gold);">Precio premium</div><div class="buyer-d">Busca: Arándano Cal. 14–18mm<br>Volumen: 8–15 TM<br>Mercado: EE.UU. y UK<br>Requiere: Cert. Global G.A.P.</div><button class="btn-c">Conectar →</button></div>
</div>
`;

export function init() {
  new Chart(document.getElementById('ch-mercado').getContext('2d'), {
    type: 'line',
    data: { labels: ['Dic','Ene','Feb','Mar','Abr','May'],
      datasets: [
        { label:'Palta Hass (S//kg)', data:[3.60,3.75,3.90,4.00,4.07,4.20], borderColor:'#C8961E', backgroundColor:'rgba(200,150,30,.06)', borderWidth:2.5, pointRadius:4, tension:.4, fill:true },
        { label:'Arándano ÷3',        data:[4.20,4.10,4.30,4.50,4.20,4.17], borderColor:'#2D7A4F', backgroundColor:'rgba(45,122,79,.06)',    borderWidth:2.5, pointRadius:4, tension:.4, fill:true }
      ] },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'top', labels:{ font:{ size:11 } } } },
      scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:11 } } },
               y:{ grid:{ color:'#EEF2EE' }, ticks:{ font:{ size:11 }, callback: v => 'S/ '+v.toFixed(2) } } } }
  });
}
