class AddUserIdToWardrobeItems < ActiveRecord::Migration[5.0]
  def change
    add_column :wardrobe_items, :user_id, :integer
  end
end
