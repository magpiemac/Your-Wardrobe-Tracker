class Capsule < ApplicationRecord
  belongs_to :user
  has_many :wardrobe_item_capsules
  has_many :wardrobe_items, through: :wardrobe_item_capsules
  accepts_nested_attributes_for :wardrobe_items

  validates :name, presence: true, uniqueness: true

  def self.stats
    joins(:wardrobe_items).group(:id).order("count(*) DESC")
  end

  def self.search(search)
    where("name LIKE ?", "%#{search}%") 
  end

end
