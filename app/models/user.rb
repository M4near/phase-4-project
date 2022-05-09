class User < ApplicationRecord
    has_many :comments
    has_many :concerts, through: :comments
end
