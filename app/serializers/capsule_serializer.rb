class CapsuleSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :wardrobe_item_capsules
  has_many :wardrobe_items, through: :wardrobe_item_capsules
end
