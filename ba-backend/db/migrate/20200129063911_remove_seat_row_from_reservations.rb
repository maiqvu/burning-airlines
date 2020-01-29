class RemoveSeatRowFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :seat_row, :string
  end
end
