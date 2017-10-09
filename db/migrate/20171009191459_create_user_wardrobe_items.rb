class CreateUserWardrobeItems < ActiveRecord::Migration[5.0]
  def change
    create_table :user_wardrobe_items do |t|
      t.integer :user_id
      t.integer :wardrobe_item_id
      t.timestamps
    end
  end
end
