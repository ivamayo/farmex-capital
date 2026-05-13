export const html = `
<!-- Cabecera Quiénes Somos -->
<div class="srv-hero">
  <div class="srv-hero-inner">
    <div class="srv-hero-tag">🌿 AgriFintech · Perú 2026</div>
    <h1 class="srv-hero-title">Quiénes somos</h1>
    <p class="srv-hero-desc">Farmex Capital es la primera plataforma AgriFintech especializada en pequeños y medianos agroexportadores de palta y arándano en la costa del Perú. Combinamos financiamiento inteligente, data agrícola, scoring alternativo, asistencia técnica, marketplace y conexión comercial para que el productor pueda operar, crecer y exportar con estabilidad financiera.</p>
    <div class="srv-mission-box">
      <div class="srv-mission-lbl">🎯 Nuestra misión</div>
      <div class="srv-mission-txt">"Convertir ciclos agrícolas en flujo de caja predecible, siendo el habilitador financiero del pequeño y mediano agroexportador peruano."</div>
    </div>
    <div class="srv-stats">
      <div class="srv-stat"><div class="srv-stat-v">35,000</div><div class="srv-stat-l">Hectáreas TAM</div></div>
      <div class="srv-stat"><div class="srv-stat-v">$357M</div><div class="srv-stat-l">Mercado anual</div></div>
      <div class="srv-stat"><div class="srv-stat-v">5</div><div class="srv-stat-l">Regiones costeras</div></div>
      <div class="srv-stat"><div class="srv-stat-v">6</div><div class="srv-stat-l">Productos por ciclo</div></div>
    </div>
  </div>
</div>

<!-- Servicio 1: Financiamiento -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FDF3DC;">💰</div>
    <div>
      <div class="srv-block-name">Financiamiento Agrícola</div>
      <div class="srv-block-tag">Crédito por etapa productiva</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos un equipo de analistas financieros especializados en agronegocios con experiencia en COFIDE, Agrobanco y banca privada. Entendemos los ciclos productivos porque trabajamos directamente con los productores en campo.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Proveer crédito accesible, flexible y alineado con los ciclos productivos del agricultor — no con los calendarios de la banca tradicional.</p>
    </div>
    <div class="srv-features-grid">
      <div class="srv-feat"><div class="sf-ico-s">🌱</div><div><div class="sf-n-s">Crédito Fertilización</div><div class="sf-d-s">Hasta S/ 4,500/ha · 8 meses</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📅</div><div><div class="sf-n-s">Crédito Campaña</div><div class="sf-d-s">Hasta S/ 12,000/ha · 12 meses</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">💧</div><div><div class="sf-n-s">Crédito Riego</div><div class="sf-d-s">Hasta S/ 8,000/ha · 18 meses</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📦</div><div><div class="sf-n-s">Crédito Postcosecha</div><div class="sf-d-s">Hasta S/ 6,500/ha · 6 meses</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🚢</div><div><div class="sf-n-s">Adelanto Exportación</div><div class="sf-d-s">Hasta 80% del contrato</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🔧</div><div><div class="sf-n-s">Crédito Tecnificación</div><div class="sf-d-s">Hasta S/ 25,000/ha · 36 meses</div></div></div>
    </div>
  </div>
</div>

<!-- Servicio 2: Data Agrícola -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#E8F4FD;">📡</div>
    <div>
      <div class="srv-block-name">Data Agrícola & Clima</div>
      <div class="srv-block-tag">Inteligencia por región · Perú</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la plataforma de inteligencia agro-climática de Farmex, integrada con datos satelitales (Sentinel-2, MODIS), estaciones meteorológicas y fuentes oficiales del SENAMHI y MIDAGRI.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Dar al productor información climática y de mercado por región para tomar mejores decisiones en el momento correcto, antes de que el problema ocurra.</p>
    </div>
    <div class="srv-regions-grid">
      <div class="srv-region" style="border-left-color:#E74C3C;">
        <div class="srg-name">🏔️ La Libertad</div>
        <div class="srg-clima">Costa / Valle</div>
        <div class="srg-temp">18–24°C</div>
        <div class="srg-status red">⚠ Lluvias esta semana</div>
        <div class="srg-cultivos">Palta Hass · Arándano</div>
      </div>
      <div class="srv-region" style="border-left-color:#27AE60;">
        <div class="srg-name">🌊 Ica</div>
        <div class="srg-clima">Costa árida</div>
        <div class="srg-temp">20–28°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Palta · Espárrago · Uva</div>
      </div>
      <div class="srv-region" style="border-left-color:#F39C12;">
        <div class="srg-name">☀️ Piura</div>
        <div class="srg-clima">Costa norte</div>
        <div class="srg-temp">24–32°C</div>
        <div class="srg-status warn">⚠ Calor sobre lo normal</div>
        <div class="srg-cultivos">Mango · Limón · Palta</div>
      </div>
      <div class="srv-region" style="border-left-color:#27AE60;">
        <div class="srg-name">🌾 Lambayeque</div>
        <div class="srg-clima">Costa norte</div>
        <div class="srg-temp">20–26°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Arándano · Palta · Pimiento</div>
      </div>
      <div class="srv-region" style="border-left-color:#2980B9;">
        <div class="srg-name">🏖️ Ancash</div>
        <div class="srg-clima">Costa central</div>
        <div class="srg-temp">17–22°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Palta · Maracuyá</div>
      </div>
    </div>
  </div>
</div>

<!-- Servicio 3: Scoring Alternativo -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#E8F8EE;">⭐</div>
    <div>
      <div class="srv-block-name">Scoring Agrícola Inteligente</div>
      <div class="srv-block-tag">IA que entiende al agricultor</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos el motor de inteligencia artificial de Farmex. Desarrollado por ingenieros de datos y especialistas agropecuarios, nuestro modelo evalúa al productor de forma integral usando fuentes alternativas que la banca tradicional ignora.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Evaluar al productor por lo que realmente es — su tierra, historial productivo y data de campo — no por su historial bancario. Porque este agricultor ya invirtió en ser mejor que el promedio, y el sistema lo sigue tratando como promedio.</p>
    </div>
    <div class="srv-features-grid">
      <div class="srv-feat"><div class="sf-ico-s">🌾</div><div><div class="sf-n-s">Historial productivo</div><div class="sf-d-s">Campañas, rendimientos, continuidad</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📡</div><div><div class="sf-n-s">Data satelital NDVI</div><div class="sf-d-s">Salud del cultivo en tiempo real</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🏡</div><div><div class="sf-n-s">Tenencia de tierra</div><div class="sf-d-s">Título, posesión, hectáreas</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🌍</div><div><div class="sf-n-s">Vinculación comercial</div><div class="sf-d-s">Compradores, contratos, exportaciones</div></div></div>
    </div>
  </div>
</div>

<!-- Servicio 4: Asistencia Técnica -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FEF9E7;">👨‍🌾</div>
    <div>
      <div class="srv-block-name">Asistencia Técnica Digital</div>
      <div class="srv-block-tag">Agrónomos especializados Farmex Perú</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la red de agrónomos certificados de Farmex Perú. Ingenieros agrónomos con especialización en palto y arándano, con más de 10 años de experiencia en campo en La Libertad, Ica, Piura y Lambayeque.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Acompañar al productor en cada etapa de su campaña con visitas de campo, monitoreo digital y soporte técnico continuo, reduciendo las pérdidas evitables del 20-30% que afectan la rentabilidad.</p>
    </div>
    <div class="srv-specialist-grid">
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F8EE;color:var(--g-mid);">JQ</div>
        <div><div class="ssp-name">Ing. Juan Quispe</div><div class="ssp-rol">Especialista Palta Hass · La Libertad</div><div class="ssp-exp">12 años en campo</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F4FD;color:var(--info);">MR</div>
        <div><div class="ssp-name">Ing. María Ramos</div><div class="ssp-rol">Especialista Arándano · Ica</div><div class="ssp-exp">8 años en campo</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#FDF3DC;color:var(--gold);">CP</div>
        <div><div class="ssp-name">Ing. Carlos Pérez</div><div class="ssp-rol">Especialista Palta · Piura</div><div class="ssp-exp">15 años en campo</div></div>
      </div>
    </div>
  </div>
</div>

<!-- Servicio 5: Marketplace -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FDEEEE;">🤝</div>
    <div>
      <div class="srv-block-name">Marketplace &amp; Conexión Comercial</div>
      <div class="srv-block-tag">Conectamos productores con compradores del mundo</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la plataforma de conexión comercial de Farmex que une directamente a productores verificados con exportadores, supermercados, procesadoras e importadores de EE.UU., Europa y Asia. Sin intermediarios innecesarios.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Eliminar la fragmentación del pequeño productor frente a grandes compradores, dándole visibilidad, trazabilidad y acceso directo al mercado internacional.</p>
    </div>
    <div style="font-size:13px;font-weight:700;color:var(--txt);margin:16px 0 12px;">Cultivos disponibles en el marketplace</div>
    <div class="srv-crop-grid">
      <div class="srv-crop-card">
        <img class="srv-crop-img" src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80" alt="Palta Hass">
        <div class="srv-crop-body">
          <div class="srv-crop-badge">🥑 Palta Hass</div>
          <div class="srv-crop-name">Finca García · La Libertad</div>
          <div class="srv-crop-info">
            <div>📍 <strong>Ubicación:</strong> Virú, La Libertad</div>
            <div>🌡️ <strong>Clima:</strong> Valle costero · 18–24°C</div>
            <div>📐 <strong>Área:</strong> 32 ha propias</div>
            <div>📦 <strong>Disponible:</strong> ~112 TM · Ago–Oct 2026</div>
            <div>✓ <strong>Certs:</strong> Global G.A.P · SENASA</div>
          </div>
          <div class="srv-crop-score">Score Farmex: <strong>760</strong> · Muy Bueno</div>
          <button class="srv-crop-btn">Ver vitrina del productor →</button>
        </div>
      </div>
      <div class="srv-crop-card">
        <img class="srv-crop-img" src="https://images.unsplash.com/photo-1425007680966-1ac71ad1b87d?w=400&q=80" alt="Arándano">
        <div class="srv-crop-body">
          <div class="srv-crop-badge" style="background:#E8F4FD;color:var(--info);">🫐 Arándano</div>
          <div class="srv-crop-name">Finca Del Valle · Ica</div>
          <div class="srv-crop-info">
            <div>📍 <strong>Ubicación:</strong> Chincha, Ica</div>
            <div>🌡️ <strong>Clima:</strong> Costa árida · 20–28°C</div>
            <div>📐 <strong>Área:</strong> 18 ha bajo malla</div>
            <div>📦 <strong>Disponible:</strong> ~45 TM · Sep–Nov 2026</div>
            <div>✓ <strong>Certs:</strong> Global G.A.P · Rainforest</div>
          </div>
          <div class="srv-crop-score">Score Farmex: <strong>810</strong> · Excelente</div>
          <button class="srv-crop-btn">Ver vitrina del productor →</button>
        </div>
      </div>
      <div class="srv-crop-card">
        <img class="srv-crop-img" src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&q=80" alt="Palta Piura">
        <div class="srv-crop-body">
          <div class="srv-crop-badge">🥑 Palta Fuerte</div>
          <div class="srv-crop-name">Finca Morales · Piura</div>
          <div class="srv-crop-info">
            <div>📍 <strong>Ubicación:</strong> Tambogrande, Piura</div>
            <div>🌡️ <strong>Clima:</strong> Costa norte · 24–32°C</div>
            <div>📐 <strong>Área:</strong> 25 ha · riego tecnificado</div>
            <div>📦 <strong>Disponible:</strong> ~75 TM · Jul–Sep 2026</div>
            <div>✓ <strong>Certs:</strong> SENASA · Orgánico</div>
          </div>
          <div class="srv-crop-score">Score Farmex: <strong>740</strong> · Bueno</div>
          <button class="srv-crop-btn">Ver vitrina del productor →</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Servicio 6: Seguro Paramétrico -->
<div class="srv-block" style="margin-bottom:0;">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#E8F8EE;">🛡️</div>
    <div>
      <div class="srv-block-name">Seguro Paramétrico Agrícola</div>
      <div class="srv-block-tag">Cobertura automática ante riesgo climático</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos el brazo de gestión de riesgo climático de Farmex, en alianza con aseguradoras especializadas y datos satelitales del SENAMHI. Activamos coberturas de forma automática sin que el productor tenga que hacer ningún trámite.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Proteger la inversión del agricultor ante eventos climáticos extremos (El Niño, lluvias, sequías) con pago automático en menos de 72 horas cuando se supera el umbral de riesgo establecido.</p>
    </div>
    <div class="srv-features-grid">
      <div class="srv-feat"><div class="sf-ico-s">🌧️</div><div><div class="sf-n-s">Cobertura por lluvias</div><div class="sf-d-s">Activa al superar 45mm/24h</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">☀️</div><div><div class="sf-n-s">Cobertura por sequía</div><div class="sf-d-s">Activa por déficit hídrico satelital</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">⚡</div><div><div class="sf-n-s">Pago en 72 horas</div><div class="sf-d-s">Sin trámites ni inspecciones</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📡</div><div><div class="sf-n-s">Activación automática</div><div class="sf-d-s">Monitoreo 24/7 con satélites</div></div></div>
    </div>
  </div>
</div>
`;

export function init() {}
