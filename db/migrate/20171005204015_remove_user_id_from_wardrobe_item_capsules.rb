class RemoveUserIdFromWardrobeItemCapsules < ActiveRecord::Migration[5.0]
  def change
    remove_column :wardrobe_item_capsules, :user_id, :integer 
  end
end
