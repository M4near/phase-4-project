class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :name
      t.string :band_name
      t.string :genre
      t.string :date
      t.string :time
      t.string :image

      t.timestamps
    end
  end
end
