Rails.application.routes.draw do
    root "welcome#index"
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :flights
    resources :cities
end
