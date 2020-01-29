json.extract! reservation, :id, :seat_row, :seat_column, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
