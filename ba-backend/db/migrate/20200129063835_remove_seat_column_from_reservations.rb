class RemoveSeatColumnFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :seat_column, :integer
  end
end
