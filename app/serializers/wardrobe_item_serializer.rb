class WardrobeItemSerializer < ActiveModel::Serializer
  attributes :id, :item, :description
  belongs_to :capsule
end
