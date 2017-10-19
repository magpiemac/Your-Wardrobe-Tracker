Rails.application.routes.draw do

  root 'welcome#home'
  
  resources :search

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  authenticated :user do
    root to: 'wardrobe_items#index', as: :authenticated_root
  end

  get '/capsules/stats', to: 'capsules#stats', as: 'stats'

  resources :wardrobe_items do
    resources :capsules, only: [:index, :create, :new, :edit, :show]
  end

  resources :capsules do
    resources :wardrobe_items, only: [:index, :create, :new, :edit, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
