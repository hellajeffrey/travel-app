class AddColumnsToFlights < ActiveRecord::Migration[5.1]
  def change
    add_column :flights, :dateAvailable, :date
    add_column :flights, :cost, :integer
    add_column :flights, :airline, :string
    add_column :flights, :origin, :string
    add_column :flights, :destination, :string
  end
end
