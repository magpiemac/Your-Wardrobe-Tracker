class CapsulesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_capsule, only: [:show, :edit, :update, :destroy]

  # GET /capsules
  # GET /capsules.json
  def index
    @capsules = current_user.capsules
  end

  # GET /capsules/1
  # GET /capsules/1.json
  def show
  end

  # GET /capsules/new
  def new
    @capsule = @wardrobe_item.capsule.build
  end

  # GET /capsules/1/edit
  def edit
  end

  # POST /capsules
  # POST /capsules.json
  def create
    @capsule = Capsule.new(capsule_params)
    @capsule.wardrobe_item_ids = params[:wardrobe_item_id]
    
    respond_to do |format|
      if @capsule.save
        format.html { redirect_to @capsule, notice: 'Capsule was successfully created.' }
        format.json { render :show, status: :created, location: @capsule }
      else
        format.html { render :new }
        format.json { render json: @capsule.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /capsules/1
  # PATCH/PUT /capsules/1.json
  def update
    respond_to do |format|
      if @capsule.update(capsule_params)
        format.html { redirect_to @capsule, notice: 'Capsule was successfully updated.' }
        format.json { render :show, status: :ok, location: @capsule }
      else
        format.html { render :edit }
        format.json { render json: @capsule.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /capsules/1
  # DELETE /capsules/1.json
  def destroy
    @capsule.destroy
    respond_to do |format|
      format.html { redirect_to capsules_url, notice: 'Capsule was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_capsule
      @capsule = Capsule.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def capsule_params
      params.require(:capsule).permit(:name, :wardrobe_item_id)
    end

    def find_wardrobe_item
      @wardrobe_item = WardrobeItem.find(params[:id])
    end
end
