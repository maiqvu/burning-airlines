class FlightsController < ApplicationController
  # before_action :set_flight, only: [:show, :edit, :update, :destroy]

  skip_before_action :verify_authenticity_token, raise: false

  def new
    @flight = Flight.new
  end

  def create
    @flight = Flight.create(flight_params)
    # redirect_to

    # respond_to do |format|
    #   if @flight.save
    #     format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
    #     format.json { render :show, status: :created, location: @flight }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @flight.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # GET /flights
  # GET /flights.json
  def index
    headers['Access-Control-Allow-Origin'] = '*'
    @flights = Flight.all

    # @flights.each do |flight|
    #   @plane = flight.plane.model
    # end

    respond_to do |format|
      format.html   # for flights#show
      format.json { render json: @flights.to_json(:include => [:plane, :reservations]) }
    end
  end
  
  # GET /flights/1
  # GET /flights/1.json
  def show
    @flight = Flight.find(params[:id])

    respond_to do |format|
      format.html   # for flights#show
      format.json { render json: {
          flight: @flight,
          plane: @flight.plane,
          reservations: @flight.reservations
        } }
    end
  end


  # GET /flights/1/edit
  def edit
    @flight = Flight.find(params[:id])
  end


  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    # @flight = Flight.find(params[:id])
    # @flight.save

    if @flight.update(flight_params)
      redirect_to( flight_path( @flight.id ) )
    else
      flash[:errors] = @flight.errors.full_messages
      render :edit
    end

    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    flight = Flight.find(params[:id])
    flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_path, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    def allow_cors
      headers['Access-Control-Allow-Origin'] = '*'
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:flight_no, :date, :from, :to)
    end
end
