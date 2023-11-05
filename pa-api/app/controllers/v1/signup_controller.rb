class V1::SignupController < ApplicationController
    def new
        @user = User.new
    end
    def create
        @user = User.new(user_params)
        if @user.save
            render json: {message: "create", user: @user}, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def index
        @user_all = User.all
        render json: @user_all
    end
    def user_params
        params.require(:user).permit(:name, :email, :password_digest)
    end  
end
