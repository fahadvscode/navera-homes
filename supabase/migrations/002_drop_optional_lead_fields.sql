alter table navera_homes_leads
  drop column if exists home_type_interest,
  drop column if exists budget_range,
  drop column if exists buyer_type,
  drop column if exists timeline;
