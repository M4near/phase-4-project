class CommentsController < ApplicationController

    def index
        render json: Comment.all
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def show
        comment = comment_find
        render json: comment
    end

    def destroy 
        comment = comment_find
        comment.destroy 
    end

    private

    def comment_find
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:content, :rating)
    end

end
