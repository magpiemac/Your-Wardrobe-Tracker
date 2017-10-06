class WardrobeItem < ApplicationRecord
  belongs_to :user
  has_many :wardrobe_item_capsules
  has_many :capsules, through: :wardrobe_item_capsules

  validates :item, presence: true
  validates :description, presence: true
  validates :description, uniqueness: { case_sensitive: false }

  def capsules_attributes=(capsules_attributes)
    capsules_attributes.values.each do |capsule_attribute|
      capsule = Capsule.find_or_create_by(capsule_attribute)
     capsules << capsule if capsule.persisted?
    end
  end

end
