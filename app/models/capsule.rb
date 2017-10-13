class Capsule < ApplicationRecord
  belongs_to :user
  has_many :wardrobe_item_capsules
  has_many :wardrobe_items, through: :wardrobe_item_capsules

  validates :name, presence: true, uniqueness: true

  def self.stats
    joins(:wardrobe_items).group(:id).order("count(*) DESC")
  end

end
