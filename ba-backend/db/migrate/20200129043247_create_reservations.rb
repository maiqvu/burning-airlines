class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :seat
      t.integer :

      t.timestamps
    end
  end
end
