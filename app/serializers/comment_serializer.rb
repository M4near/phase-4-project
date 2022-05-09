class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  has_one :user
  has_one :concert
end
