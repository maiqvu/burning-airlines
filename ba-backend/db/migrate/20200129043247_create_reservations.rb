class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :seat_row
      t.integer :seat_column

      t.timestamps
    end
  end
end
