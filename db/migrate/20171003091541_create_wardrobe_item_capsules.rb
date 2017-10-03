class CreateWardrobeItemCapsules < ActiveRecord::Migration[5.0]
  def change
    create_table :wardrobe_item_capsules do |t|

      t.timestamps
    end
  end
end
