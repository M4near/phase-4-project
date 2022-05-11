class ConcertsController < ApplicationController

    def index
        render json: Concert.all
    end

    def show
        concert = findConcert
        render json: concert
    end

 private
def findConcert
    concert.find_by(id: params[:id])
end

end
