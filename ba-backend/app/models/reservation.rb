class Reservation < ApplicationRecord
  belongs_to :flight
  belongs_to :user

  validates :flight_id, :user_id, :presence => true
end
