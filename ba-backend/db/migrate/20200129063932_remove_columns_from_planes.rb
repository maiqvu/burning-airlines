class RemoveColumnsFromPlanes < ActiveRecord::Migration[5.2]
  def change
    remove_column :planes, :columns, :integer
  end
end
