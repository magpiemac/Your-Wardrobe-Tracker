class UserWardrobeItem < ApplicationRecord
  belongs_to :user
  belongs_to :wardrobe_item
end
