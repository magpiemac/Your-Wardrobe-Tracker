Rails.application.routes.draw do
  resources :wardrobe_item_capsules
  devise_for :users
  resources :wardrobe_items
  resources :capsules
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
