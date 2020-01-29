# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

  u1 = User.create! name: 'Jordan'
  u2 = User.create! name: 'Freddie'
  u3 = User.create! name: 'Mia'


puts "Created #{ User.count } users  "

Plane.destroy_all

p1 = Plane.create! model: "747", seats: 30
p2 = Plane.create! model: "737", seats: 30
p3 = Plane.create! model: "777", seats: 30


puts "Created #{ Plane.count } planes  "




Flight.destroy_all

f1 = Flight.create! flight_no: 'VA-345', date: "01/02/2020", from: "JFK", to: "SYD", plane: p1
f2 = Flight.create! flight_no: 'JP-678', date: "03/02/2020", from: "MELB", to: "TYO", plane: p2
f3 = Flight.create! flight_no: 'BA-749', date: "05/02/2020", from: "LON", to: "LAX", plane: p3

puts "Created #{ Flight.count } flights  "






Reservation.destroy_all

r1 = Reservation.create!  seat: 10, user: u1, flight: f1
r2 = Reservation.create!  seat: 25, user: u2, flight: f2
r3 = Reservation.create!  seat: 8, user: u3, flight: f3

puts "Created #{ Reservation.count } reservations  "
