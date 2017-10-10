class Capsule < ApplicationRecord
  has_many :wardrobe_item_capsules
  has_many :wardrobe_items, through: :wardrobe_item_capsules

  validates :name, presence: true
  validates :name, uniqueness: true
end
