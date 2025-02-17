const podcasts = [
  {
    id: 1,
    title: "Scrimba Podcast",
    duration: 50,
    tags: ["education", "jobs", "technology"],
    hosts: ["Alex Booker"],
    rating: 10,
    genre: "education",
    paid: false,
  },
  {
    id: 2,
    title: "Crime Fan",
    duration: 150,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Bob Smith", "Camilla Lambert"],
    genre: "true crime",
    rating: 5,
    paid: true,
  },
  {
    id: 3,
    title: "Mythical Creatures",
    duration: 99,
    tags: ["entertainment", "general", "unicorns"],
    hosts: ["Esmerelda Shelley", "Duke Dukington", "Felix the Cat"],
    genre: "fantasy",
    rating: 8,
    paid: true,
  },
  {
    title: "Crime Crime Crime",
    duration: 70,
    tags: ["crime", "entertainment", "mature"],
    hosts: ["Jessica Jones", "Humphrey Bogart", "Inspector Gadget"],
    genre: "true crime",
    rating: 6,
    paid: true,
  },
  {
    title: "Something about Witches",
    duration: 35,
    tags: ["fantasy", "entertainment"],
    hosts: ["Frewin Wyrm", "Evanora Highmore"],
    genre: "fantasy",
    rating: 8,
    paid: false,
  },
  {
    title: "Coding Corner",
    duration: 55,
    tags: ["education", "jobs", "technology"],
    hosts: ["Treasure Porth", "Guil Hernandez", "Tom Chant"],
    genre: "education",
    rating: 9,
    paid: false,
  },
];

const products = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savory",
  },
  {
    item: "🍬",
    price: 0.89,
    type: "sweet",
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savory",
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savory",
  },
];

const cartItems = [
  {
    product: "🍭",
    price: 2.99,
  },
  {
    product: "🍫",
    price: 0.99,
  },
  {
    product: "🏡",
    price: 40000000,
  },
  {
    product: "🧁",
    price: 0.99,
  },
  {
    product: "📚",
    price: 0.99,
  },
  {
    product: "⏰",
    price: 13.99,
  },
  {
    product: "🍬",
    price: 0.89,
  },
  {
    product: "🥎",
    price: 3.99,
  },
  {
    product: "🎸",
    price: 13.99,
  },
  {
    product: "🎨",
    price: 23.99,
  },
  {
    product: "💕",
    price: 0,
  },
];

const mediaData = [
  {
    id: 1,
    title: "Stranger Scrims",
    duration: 40,
    tags: ["supernatural", "horror", "drama"],
  },
  {
    id: 2,
    title: "The Scrim of the Dragon",
    duration: 60,
    tags: ["drama", "fantasy"],
  },
  {
    id: 3,
    title: "Scrim Hunters",
    duration: 22,
    tags: ["reality", "home improvement"],
  },
  {
    id: 4,
    title: "This Old Scrim",
    duration: 30,
    tags: ["reality", "home improvement"],
  },
  {
    id: 5,
    title: "What We Do in the Scrim",
    duration: 55,
    tags: ["drama", "comedy", "supernatural"],
  },
  {
    id: 6,
    title: "The Scrimdalorian",
    duration: 58,
    tags: ["fantasy", "sci-fi", "adventure"],
  },
];

const postData = [
  {
    post: "A lot of you have asked about my morning skin care routine...",
    likes: 348,
  },
  {
    post: "New Year, new me. #blessed",
    likes: 102,
  },
  {
    post: "Sunday by the pool 🌴 #vibes #mood #hotdoglegs",
    likes: 544,
  },
  {
    post: "Here are my top 5 #notsponsored unbiased dry shampoo recs...",
    likes: 745,
  },
  {
    post: "Last day in Hawaii! The tans will fade but the memories will last forever #holidays #foreverhawaii #blessed #followme",
    likes: 412,
  },
  {
    post: "Leg day #summerbody2022 #gymshark #beachworkout",
    likes: 275,
  },
];

export { podcasts, products, cartItems, mediaData, postData };
