export const html = `
<div class="stitle">⭐ Mi Score Agrícola Farmex AI</div>
<div class="sc-layout">
  <div class="sc-main">
    <p style="font-size:11px;color:rgba(255,255,255,.4);letter-spacing:1px;text-transform:uppercase;">Tu puntuación</p>
    <div class="sc-circle">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle cx="75" cy="75" r="62" fill="none" stroke="rgba(200,150,30,.15)" stroke-width="11"/>
        <circle cx="75" cy="75" r="62" fill="none" stroke="#E8B84B" stroke-width="11" stroke-dasharray="390" stroke-dashoffset="93" stroke-linecap="round"/>
      </svg>
      <div class="sc-txt"><span class="sc-num">760</span><span class="sc-max">/ 1000</span></div>
    </div>
    <div class="sc-cat">Muy Bueno</div>
    <div class="sc-desc">Accedes a tasas preferenciales desde 1.5% mensual y montos ampliados por historial productivo.</div>
    <div class="sc-next">
      <div class="sc-next-t">Próximo nivel</div>
      <div class="sc-next-v">Excelente (800+)</div>
      <div class="sc-next-h">Agrega certificado de posesión para +25 pts</div>
    </div>
  </div>
  <div class="sc-factors">
    <div style="font-size:14px;font-weight:700;color:var(--txt);margin-bottom:16px;">Factores de evaluación</div>
    <div class="sf-row"><div class="sf-ico">🌾</div><div class="sf-info"><div class="sf-n">Historial productivo</div><div class="sf-d">5 campañas registradas · sin interrupciones</div></div><div class="sf-bar"><div class="sf-fill" style="width:90%;background:var(--ok)"></div></div><div class="sf-v">90</div></div>
    <div class="sf-row"><div class="sf-ico">🏡</div><div class="sf-info"><div class="sf-n">Tenencia de tierra</div><div class="sf-d">32 ha propias con título registrado</div></div><div class="sf-bar"><div class="sf-fill" style="width:85%;background:var(--ok)"></div></div><div class="sf-v">85</div></div>
    <div class="sf-row"><div class="sf-ico">💳</div><div class="sf-info"><div class="sf-n">Historial de pagos</div><div class="sf-d">2 créditos activos · pagos al día</div></div><div class="sf-bar"><div class="sf-fill" style="width:80%;background:var(--gold)"></div></div><div class="sf-v">80</div></div>
    <div class="sf-row"><div class="sf-ico">📡</div><div class="sf-info"><div class="sf-n">Data satelital (NDVI)</div><div class="sf-d">Índice 0.68 · vegetación saludable</div></div><div class="sf-bar"><div class="sf-fill" style="width:75%;background:var(--gold)"></div></div><div class="sf-v">75</div></div>
    <div class="sf-row"><div class="sf-ico">🌍</div><div class="sf-info"><div class="sf-n">Vinculación comercial</div><div class="sf-d">3 compradores activos · 1 contrato firmado</div></div><div class="sf-bar"><div class="sf-fill" style="width:70%;background:var(--info)"></div></div><div class="sf-v">70</div></div>
    <div class="sf-row"><div class="sf-ico">📄</div><div class="sf-info"><div class="sf-n">Documentación</div><div class="sf-d">Pendiente: Certificado de posesión</div></div><div class="sf-bar"><div class="sf-fill" style="width:60%;background:var(--warn)"></div></div><div class="sf-v">60</div></div>
  </div>
</div>
`;

export function init() {}
