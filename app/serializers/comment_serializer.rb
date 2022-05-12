class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :user_id, :concert_id
  has_one :user
  has_one :concert
end
