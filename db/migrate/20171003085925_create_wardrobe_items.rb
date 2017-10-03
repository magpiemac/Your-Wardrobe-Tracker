class CreateWardrobeItems < ActiveRecord::Migration[5.0]
  def change
    create_table :wardrobe_items do |t|
      t.string :item
      t.string :description
      t.timestamps
    end
  end
end
