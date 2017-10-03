Rails.application.routes.draw do
  root 'welcome#home'
  devise_for :users

  authenticated :user do
    root to: 'wardrobe_items#index', as: :authenticated_root
  end
  
  resources :wardrobe_item_capsules
  resources :wardrobe_items
  resources :capsules
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
