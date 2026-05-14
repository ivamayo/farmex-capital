-- ══════════════════════════════════════════
-- FARMEX CAPITAL · Schema de base de datos
-- Pegar en Supabase → SQL Editor → Run
-- ══════════════════════════════════════════

-- 1. PRODUCTORES
create table if not exists productores (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references auth.users on delete cascade,
  nombre      text not null,
  email       text,
  whatsapp    text,
  region      text,
  distrito    text,
  total_ha    numeric(8,2),
  cultivo     text,           -- 'Palta Hass' | 'Arándano' | 'Ambos'
  experiencia int,
  score       int default 0,
  created_at  timestamptz default now()
);

-- 2. HECTÁREAS / CAMPOS
create table if not exists hectareas (
  id             uuid default gen_random_uuid() primary key,
  productor_id   uuid references productores on delete cascade,
  nombre         text not null,
  cultivo        text not null,   -- 'palta' | 'arandano'
  variedad       text,
  area_ha        numeric(8,2),
  latitud        numeric(10,6),
  longitud       numeric(10,6),
  coordenadas    jsonb,           -- polígono del mapa
  altitud_msnm   int,
  tipo_suelo     text,
  tipo_riego     text,
  estado         text default 'activo',  -- 'activo' | 'inactivo'
  cosecha_est    text,
  certificaciones text[],
  created_at     timestamptz default now()
);

-- 3. SOLICITUDES DE CRÉDITO
create table if not exists creditos (
  id             uuid default gen_random_uuid() primary key,
  productor_id   uuid references productores on delete cascade,
  tipo_credito   text not null,
  cultivo        text,
  hectareas      numeric(8,2),
  monto          numeric(12,2),
  plazo_meses    int,
  tasa           numeric(5,2),
  estado         text default 'pendiente',  -- 'pendiente' | 'aprobado' | 'activo' | 'pagado'
  created_at     timestamptz default now()
);

-- 4. MARKETPLACE
create table if not exists marketplace (
  id              uuid default gen_random_uuid() primary key,
  productor_id    uuid references productores on delete cascade,
  cultivo         text not null,
  variedad        text,
  toneladas_disp  numeric(8,2),
  precio_kg       numeric(8,2),
  periodo_cosecha text,
  puerto_embarque text,
  certificaciones text[],
  activo          boolean default true,
  created_at      timestamptz default now()
);

-- 5. RESPUESTAS DE ENCUESTA
create table if not exists encuestas (
  id           uuid default gen_random_uuid() primary key,
  productor_id uuid references productores,
  email        text,
  respuestas   jsonb,
  completada   boolean default false,
  created_at   timestamptz default now()
);

-- 6. ALERTAS CLIMÁTICAS
create table if not exists alertas_clima (
  id         uuid default gen_random_uuid() primary key,
  region     text not null,
  tipo       text,    -- 'lluvias' | 'calor' | 'viento' | 'el_nino'
  nivel      text,    -- 'alto' | 'medio' | 'bajo'
  cultivo    text,    -- 'palta' | 'arandano' | 'ambos'
  descripcion text,
  impacto    text,
  activa     boolean default true,
  fecha      date default current_date
);

-- ══════════════════════════════════════════
-- ROW LEVEL SECURITY (cada productor solo ve sus datos)
-- ══════════════════════════════════════════

alter table productores enable row level security;
alter table hectareas    enable row level security;
alter table creditos     enable row level security;
alter table marketplace  enable row level security;
alter table encuestas    enable row level security;

-- Políticas: el productor solo accede a sus propios registros
create policy "productor_own" on productores
  using (auth.uid() = user_id);

create policy "hectareas_own" on hectareas
  using (productor_id in (select id from productores where user_id = auth.uid()));

create policy "creditos_own" on creditos
  using (productor_id in (select id from productores where user_id = auth.uid()));

create policy "marketplace_public_read" on marketplace
  for select using (activo = true);

create policy "marketplace_own_write" on marketplace
  using (productor_id in (select id from productores where user_id = auth.uid()));

-- Alertas públicas (todos pueden leer)
alter table alertas_clima enable row level security;
create policy "alertas_public" on alertas_clima for select using (true);

-- ══════════════════════════════════════════
-- DATOS DE EJEMPLO (para prueba inicial)
-- ══════════════════════════════════════════

insert into alertas_clima (region, tipo, nivel, cultivo, descripcion, impacto) values
  ('La Libertad', 'lluvias',  'alto',  'ambos',    'Lluvias +40% sobre lo normal esta semana', 'Palta: caída de frutos. Arándano: riesgo botrytis'),
  ('Piura',       'calor',    'medio', 'ambos',    'Temperaturas sobre 30°C proyectadas',       'Palta: quemadura de sol. Arándano: estrés hídrico'),
  ('Ica',         'normal',   'bajo',  'ambos',    'Condiciones normales',                      'Sin impacto significativo'),
  ('Lambayeque',  'normal',   'bajo',  'ambos',    'Condiciones normales',                      'Sin impacto significativo'),
  ('Ancash',      'normal',   'bajo',  'ambos',    'Condiciones normales',                      'Sin impacto significativo');
