class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_prameters, if: :devise_controller?

  protected

  def configure_permitted_prameters
  	devise_parameter_sanitizer.permit(:sign_up, keys:[:name])
  end
end
