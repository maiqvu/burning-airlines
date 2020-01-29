class RemoveSeatColumnFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :, :integer
  end
end
