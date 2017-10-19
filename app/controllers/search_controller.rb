class SearchController < ApplicationController

  def index
    if params[:search]
      @capsules = Capsule.search(params[:search]).order("created_at DESC")
    end
  end

end
