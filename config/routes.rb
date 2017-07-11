Rails.application.routes.draw do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :flights do
    end

    root "welcome#index"

end
