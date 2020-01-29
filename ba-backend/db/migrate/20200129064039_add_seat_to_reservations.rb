class AddSeatToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :seat, :integer
  end
end
