class ConcertsController < ApplicationController

    def index
        render json: Concert.all
    end

    def show
        concert = findConcert
        render json: concert, serializer: ConcertWithCommentsSerializer
    end

private

    def findConcert
        Concert.find(params[:id])
    end

end
