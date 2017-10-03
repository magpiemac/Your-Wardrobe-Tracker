class CreateWardrobeItemCapsules < ActiveRecord::Migration[5.0]
  def change
    create_table :wardrobe_item_capsules do |t|
      t.integer :user_id
      t.integer :wardrobe_item_id
      t.integer :capsule_id
      t.timestamps
    end
  end
end
