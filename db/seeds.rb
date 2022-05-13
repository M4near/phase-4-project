# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding users..."
User.create([
  {
    username: "ethan",
    password: "111111",
    is_admin: true
  },
  {
    username: "FreddieIsReady",
    password: "222222",
    is_admin: true
  },
  {
    username: "MichaelRecycle",
    password: "333333",
    is_admin: true
  },
  {
    username: "Nick",
    password: "666666",
    is_admin: false
  },
  {
    username: "Dakota",
    password: "999999",
    is_admin: false
  }
])

puts "Seeding concerts..."
Concert.create([
  {
    name: "Bieber Fever",
    band_name: "Justin Bieber",
    genre: "Pop",
    date: "12/24/22",
    time: "7:00 PM",
    image: "/concertpix/1.jpg"
  },
  {
    name: "Rock And Roll You All Nite",
    band_name: "Kiss",
    genre: "Rock",
    date: "1/1/23",
    time: "12:30 AM",
    image: "/concertpix/2.jpg"
  },
  {
    name: "Let's Get It On!",
    band_name: "Marvin Gaye",
    genre: "R&B",
    date: "10/14/22",
    time: "9:00 PM",
    image: "/concertpix/3.jpg"
  },
  {
    name: "Friends and Heroes! `Merica!",
    band_name: "Blake Shelton",
    genre: "Country",
    date: "7/4/22",
    time: "4:00 PM",
    image: "/concertpix/4.jpg"
  },
  {
    name: "Spaghetti On My Sweater Tour",
    band_name: "Eminem",
    genre: "Rap",
    date: "12/24/22",
    time: "2:00 AM",
    image: "/concertpix/5.jpg"
  },
  {
    name: "Eat It, Amish Paradise!",
    band_name: "Weird Al",
    genre: "Parody",
    date: "6/4/22",
    time: "8:00 PM",
    image: "/concertpix/6.jpg"
  },
  {
    name: "Malibu's Least Wanted",
    band_name: "B'rad",
    genre: "Parody",
    date: "2/14/22",
    time: "2:00 PM",
    image: "/concertpix/7.jpg"
  },
  {
    name: "The Old Town Road To Montero",
    band_name: "Lil' Nas X",
    genre: "Country",
    date: "5/24/22",
    time: "11:00 PM",
    image: "/concertpix/8.jpg"
  },
  {
    name: "Wahoo And Puhlease",
    band_name: "Cardi B",
    genre: "Rap",
    date: "8/20/22",
    time: "7:00 PM",
    image: "/concertpix/9.jpg"
  },
  {
    name: "Speak Now For The Fearless, Red, 1989 Reputation World Tour",
    band_name: "Taylor Swift",
    genre: "Country",
    date: "11/24/22",
    time: "5:00 PM",
    image: "/concertpix/10.jpg"
  }
])

puts "Seeding comments..."
Comment.create([
  {
    user_id: 1,
    concert_id: 3,
    rating: 5,
    content: "The hype is real!"
  },
  {
    user_id: 2,
    concert_id: 8,
    rating: 2,
    content: "Just going cause my girlfriend wants to."
  }
])


puts "Done seeding!"