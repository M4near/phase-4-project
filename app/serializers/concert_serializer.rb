class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :band_name, :genre, :date, :time, :image
end
