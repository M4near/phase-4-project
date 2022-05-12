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
    image: "https://drive.google.com/file/d/14antK4mfJjv50ha8d2qt6fG4hewDNK0R/view?usp=sharing"
  },
  {
    name: "Rock And Roll You All Nite",
    band_name: "Kiss",
    genre: "Rock",
    date: "1/1/23",
    time: "12:30 AM",
    image: "https://wallpaperaccess.com/full/1658010.jpg"
  },
  {
    name: "Let's Get It On!",
    band_name: "Marvin Gaye",
    genre: "R&B",
    date: "10/14/22",
    time: "9:00 PM",
    image: "https://wallpapercave.com/wp/wp4136227.jpg"
  },
  {
    name: "Friends and Heroes! `Merica!",
    band_name: "Blake Shelton",
    genre: "Country",
    date: "7/4/22",
    time: "4:00 PM",
    image: "https://images7.alphacoders.com/575/thumb-1920-575392.jpg"
  },
  {
    name: "Spaghetti On My Sweater Tour",
    band_name: "Eminem",
    genre: "Rap",
    date: "12/24/22",
    time: "2:00 AM",
    image: "https://i.ytimg.com/vi/mdREwJPQ6k0/maxresdefault.jpg"
  },
  {
    name: "Eat It, Amish Paradise!",
    band_name: "Weird Al",
    genre: "Parody",
    date: "6/4/22",
    time: "8:00 PM",
    image: "https://images.fanart.tv/fanart/yankovic-weird-al-4ff2dad4c8284.jpg"
  },
  {
    name: "Malibu's Least Wanted",
    band_name: "B'rad",
    genre: "Parody",
    date: "2/14/22",
    time: "2:00 PM",
    image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/02/Malibus-Most-Wanted.jpg"
  },
  {
    name: "The Old Town Road To Montero",
    band_name: "Lil' Nas X",
    genre: "Country",
    date: "5/24/22",
    time: "11:00 PM",
    image: "https://www.rollingstone.com/wp-content/uploads/2021/03/lil-nas-x-montero-satanists2.jpg?resize=1800,1200&w=1800"
  },
  {
    name: "Wahoo And Puhlease",
    band_name: "Cardi B",
    genre: "Rap",
    date: "8/20/22",
    time: "7:00 PM",
    image: "https://www.essence.com/wp-content/uploads/2020/12/cardi-tries-Cropped-1-1920x1080.png"
  },
  {
    name: "Speak Now For The Fearless, Red, 1989 Reputation World Tour",
    band_name: "Taylor Swift",
    genre: "Country",
    date: "11/24/22",
    time: "5:00 PM",
    image: "https://wallpaper.dog/large/10769137.jpg"
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