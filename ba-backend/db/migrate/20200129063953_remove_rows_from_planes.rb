class RemoveRowsFromPlanes < ActiveRecord::Migration[5.2]
  def change
    remove_column :planes, :rows, :integer
  end
end
