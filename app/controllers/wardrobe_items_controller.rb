class WardrobeItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_wardrobe_item, only: [:show, :edit, :update, :destroy]
  before_action :all_capsules, only: [:new, :create, :edit, :update, :show]

  # GET /wardrobe_items
  # GET /wardrobe_items.json
  def index
    @wardrobe_items = current_user.wardrobe_items
  end

  # GET /wardrobe_items/1
  # GET /wardrobe_items/1.json
  def show
  end

  # GET /wardrobe_items/new
  def new
    @wardrobe_item = WardrobeItem.new(user_id: current_user.id)
    @wardrobe_item.capsules.build
  end

  # GET /wardrobe_items/1/edit
  def edit
  end

  # POST /wardrobe_items
  # POST /wardrobe_items.json
  def create
    @wardrobe_item = WardrobeItem.new(wardrobe_item_params)

    respond_to do |format|
      if @wardrobe_item.save
        format.html { redirect_to @wardrobe_item, notice: 'Wardrobe item was successfully created.' }
        format.json { render :show, status: :created, location: @wardrobe_item }
      else
        format.html { render :new }
        format.json { render json: @wardrobe_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wardrobe_items/1
  # PATCH/PUT /wardrobe_items/1.json
  def update
    respond_to do |format|
      if @wardrobe_item.update(wardrobe_item_params)
        format.html { redirect_to @wardrobe_item, notice: 'Wardrobe item was successfully updated.' }
        format.json { render :show, status: :ok, location: @wardrobe_item }
      else
        format.html { render :edit }
        format.json { render json: @wardrobe_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wardrobe_items/1
  # DELETE /wardrobe_items/1.json
  def destroy
    @wardrobe_item.destroy
    respond_to do |format|
      format.html { redirect_to wardrobe_items_url, notice: 'Wardrobe item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wardrobe_item
      @wardrobe_item = WardrobeItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wardrobe_item_params
      params.require(:wardrobe_item).permit(:item, :description, :user_id, capsule_ids:[], capsules_attributes:[:name, :id])
    end

    def all_capsules
      @capsules = current_user.capsules
    end
end
