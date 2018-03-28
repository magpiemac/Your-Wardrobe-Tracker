class WardrobeItemSerializer < ActiveModel::Serializer
  attributes :id, :item, :description
  has_many :wardrobe_item_capsules
  has_many :capsules, through: :wardrobe_item_capsules
end
