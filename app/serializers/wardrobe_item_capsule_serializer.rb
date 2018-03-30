class WardrobeItemCapsuleSerializer < ActiveModel::Serializer
  attributes :id, :wardrobe_item_id, :capsule_id
  belongs_to :wardrobe_item
  belongs_to :capsule
end
