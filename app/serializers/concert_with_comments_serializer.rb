class ConcertWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :band_name, :genre, :date, :time, :image
  has_many :comments
end
