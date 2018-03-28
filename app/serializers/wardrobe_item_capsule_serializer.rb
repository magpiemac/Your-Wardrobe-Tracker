class WardrobeItemCapsuleSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :wardrobe_item
  belongs_to :capsule
end
