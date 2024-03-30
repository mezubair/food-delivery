-- Insert data into the Items table with auto-increment for id column

INSERT INTO item (type, description) VALUES
  ('perishable', 'Fresh Vegetables'),
  ('non-perishable', 'Packaged Foods');

-- Insert data into the Organizations table
INSERT INTO organization (name) VALUES
  ('Organization A'),
  ('Organization B');

-- Insert data into the Pricing table
-- Sample data for Organization 1 and perishable items
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
  (1, 1, 'central', 5, 1.5, 10), -- Perishable item pricing for Organization 1 in the Central zone
  (1, 1, 'north', 5, 1.5, 10),   -- Perishable item pricing for Organization 1 in the North zone
  (1, 1, 'south', 5, 1.5, 10),   -- Perishable item pricing for Organization 1 in the South zone
  (1, 1, 'east', 5, 1.5, 10),    -- Perishable item pricing for Organization 1 in the East zone
  (1, 1, 'west', 5, 1.5, 10);    -- Perishable item pricing for Organization 1 in the West zone

-- Sample data for Organization 1 and non-perishable items
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
  (1, 2, 'central', 5, 1, 8),    -- Non-perishable item pricing for Organization 1 in the Central zone
  (1, 2, 'north', 5, 1, 8),      -- Non-perishable item pricing for Organization 1 in the North zone
  (1, 2, 'south', 5, 1, 8),      -- Non-perishable item pricing for Organization 1 in the South zone
  (1, 2, 'east', 5, 1, 8),       -- Non-perishable item pricing for Organization 1 in the East zone
  (1, 2, 'west', 5, 1, 8);       -- Non-perishable item pricing for Organization 1 in the West zone

-- Sample data for Organization 2 and perishable items
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
  (2, 1, 'central', 5, 1.5, 10), -- Perishable item pricing for Organization 2 in the Central zone
  (2, 1, 'north', 5, 1.5, 10),   -- Perishable item pricing for Organization 2 in the North zone
  (2, 1, 'south', 5, 1.5, 10),   -- Perishable item pricing for Organization 2 in the South zone
  (2, 1, 'east', 5, 1.5, 10),    -- Perishable item pricing for Organization 2 in the East zone
  (2, 1, 'west', 5, 1.5, 10);    -- Perishable item pricing for Organization 2 in the West zone

-- Sample data for Organization 2 and non-perishable items
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
  (2, 2, 'central', 5, 1, 8),    -- Non-perishable item pricing for Organization 2 in the Central zone
  (2, 2, 'north', 5, 1, 8),      -- Non-perishable item pricing for Organization 2 in the North zone
  (2, 2, 'south', 5, 1, 8),      -- Non-perishable item pricing for Organization 2 in the South zone
  (2, 2, 'east', 5, 1, 8),       -- Non-perishable item pricing for Organization 2 in the East zone
  (2, 2, 'west', 5, 1, 8);       -- Non-perishable item pricing for Organization 2 in the West zone
