class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.text :description
      t.integer :rows
      t.integer :seats_per_row

      t.timestamps
    end
  end
end
