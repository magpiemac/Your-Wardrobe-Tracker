class AddUserIdToCapsules < ActiveRecord::Migration[5.0]
  def change
      add_column :capsules, :user_id, :integer
  end
end
