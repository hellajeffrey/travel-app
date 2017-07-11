Rails.application.routes.draw do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :flights
    resources :cities
    root "welcome#index"
end
