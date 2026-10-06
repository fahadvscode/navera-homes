create table if not exists navera_homes_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  home_type_interest text,
  budget_range text,
  buyer_type text,
  timeline text,
  is_broker boolean not null default false,
  source text not null default 'https://naverahomes.com',
  casl_consent boolean not null default false,
  consent_timestamp timestamptz,
  consent_page text,
  utm_source text, utm_medium text, utm_campaign text, utm_term text, utm_content text
);

alter table navera_homes_leads enable row level security;

create policy "anon can insert navera_homes_leads"
  on navera_homes_leads for insert
  to anon
  with check (true);
