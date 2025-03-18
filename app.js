const products = [
  {
    img: "/images/electronics1.jpg",
    category: "Electronics",
    name: "Smartphone Model X",
    description: "Latest smartphone with advanced features.",
    price: 699.99,
  },
  {
    img: "/images/electronics2.jpg",
    category: "Electronics",
    name: "Wireless Headphones Y",
    description: "Noise-cancelling over-ear headphones.",
    price: 199.99,
  },
  {
    img: "/images/electronics3.jpg",
    category: "Electronics",
    name: "4K LED TV Z",
    description: "Ultra HD television with smart features.",
    price: 999.99,
  },
  {
    img: "/images/electronics4.jpg",
    category: "Electronics",
    name: "Bluetooth Speaker A",
    description: "Portable speaker with high-quality sound.",
    price: 49.99,
  },
  {
    img: "/images/electronics5.jpg",
    category: "Electronics",
    name: "Smartwatch B",
    description: "Fitness tracking and notifications on your wrist.",
    price: 149.99,
  },
  {
    img: "/images/fashion1.jpg",
    category: "Fashion",
    name: "Men's Casual Shirt",
    description: "Comfortable cotton shirt for everyday wear.",
    price: 29.99,
  },
  {
    img: "/images/fashion2.jpg",
    category: "Fashion",
    name: "Kids Summer Dress ",
    description: "Lightweight dress perfect for summer outings.",
    price: 39.99,
  },
  {
    img: "/images/fashion3.jpg",
    category: "Fashion",
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 19.99,
  },
  {
    img: "/images/fashion4.jpg",
    category: "Fashion",
    name: "Leather Wallet",
    description: "Durable wallet with multiple compartments.",
    price: 24.99,
  },
  {
    img: "/images/fashion5.jpg",
    category: "Fashion",
    name: "Running Shoes",
    description: "Comfortable shoes designed for running.",
    price: 59.99,
  },
  {
    img: "/images/home1.jpg",
    category: "Home Appliances",
    name: "Air Purifier",
    description: "Removes pollutants and allergens from the air.",
    price: 129.99,
  },
  {
    img: "/images/home2.jpg",
    category: "Home Appliances",
    name: "Blender",
    description: "High-speed blender for smoothies and soups.",
    price: 89.99,
  },
  {
    img: "/images/home3.jpg",
    category: "Home Appliances",
    name: "Vacuum Cleaner",
    description: "Powerful vacuum cleaner with HEPA filter.",
    price: 149.99,
  },
  {
    img: "/images/home4.jpg",
    category: "Home Appliances",
    name: "Microwave Oven",
    description: "Compact microwave with multiple settings.",
    price: 99.99,
  },
  {
    img: "/images/home5.jpg",
    category: "Home Appliances",
    name: "Coffee Maker",
    description: "Brews coffee quickly and efficiently.",
    price: 49.99,
  },
  {
    img: "/images/books1.jpg",
    category: "Books",
    name: "Mystery Novel",
    description: "A thrilling mystery that keeps you guessing.",
    price: 14.99,
  },
  {
    img: "/images/books2.jpg",
    category: "Books",
    name: "Science Fiction Epic",
    description: "An epic journey through space and time.",
    price: 19.99,
  },
  {
    img: "/images/books3.jpg",
    category: "Books",
    name: "Cookbook",
    description: "Delicious recipes from around the world.",
    price: 24.99,
  },
  {
    img: "/images/books4.jpg",
    category: "Books",
    name: "Self-Help Guide",
    description: "Tips and strategies for personal growth.",
    price: 12.99,
  },
  {
    img: "/images/books5.jpg",
    category: "Books",
    name: "Historical Fiction",
    description: "A novel set in a fascinating historical period.",
    price: 16.99,
  },
  {
    img: "/images/beauty1.jpg",
    category: "Beauty",
    name: "Moisturizing Cream",
    description: "Keeps your skin hydrated and smooth.",
    price: 29.99,
  },
  {
    img: "/images/beauty2.jpg",
    category: "Beauty",
    name: "Lipstick Set",
    description: "A set of vibrant and long-lasting lipsticks.",
    price: 39.99,
  },
  {
    img: "/images/beauty3.jpg",
    category: "Beauty",
    name: "Perfume",
    description: "A fragrance that leaves a lasting impression.",
    price: 59.99,
  },
  {
    img: "/images/beauty4.jpg",
    category: "Beauty",
    name: "Hair Dryer",
    description: "Quick-drying with multiple heat settings.",
    price: 49.99,
  },
  {
    img: "/images/beauty5.jpg",
    category: "Beauty",
    name: "Nail Polish Kit",
    description: "A variety of colors for beautiful nails.",
    price: 19.99,
  },
  {
    img: "/images/sports1.jpg",
    category: "Sports",
    name: "Yoga Mat",
    description: "Non-slip mat for all your yoga sessions.",
    price: 25.99,
  },
  {
    img: "/images/sports2.jpg",
    category: "Sports",
    name: "Dumbbell Set",
    description: "Adjustable weights for strength training.",
    price: 79.99,
  },
  {
    img: "/images/sports3.jpg",
    category: "Sports",
    name: "Football",
    description: "Official size and weight, perfect for professional matches",
    price: 25.99,
  },
  {
    img: "/images/sports4.jpg",
    category: "Sports",
    name: "Cricket Bat",
    description: "Premium quality bat for powerful shots and durability.",
    price: 6000,
  },
  {
    img: "/images/sports5.jpg",
    category: "Sports",
    name: "Wilson Tennis Racket",
    description: "Lightweight and strong racket for professional-level play",
    price: 8500,
  },
];

document.addEventListener("DOMContentLoaded" , function () {
  allCategory()
})

// console.log(products);

const btn = ["Electronics", "Fashion", "Home Appliances", "Books", "Beauty","Sports"];

let BtnDisplay = document.querySelector("#BtnDisplay");
let cardDisplay = document.querySelector("#cardDisplay");

btn.map((item, index) => {

  // console.log(item);
  BtnDisplay.innerHTML += `<button class="btn btn-primary" onclick="btnCick(${index})"> ${item} </button>`;
});

function displayCards(call) {
  cardDisplay.innerHTML = "";

  call.map((pro) => {
    cardDisplay.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${pro.img}" class="card-img-top" style="object-fit: cover; width: 100%; height: 200px;" alt="${pro.name}">
    <div class="card-body">
     <h5 class="card-title fw-bold">${pro.name}</h5>
     <h5 class="card-title">${pro.category}</h5>
     <p class="card-text">${pro.description}</p>
     <a class="nav-link fw-bold">Rs: ${pro.price}</a>
    </div>
    </div>`;
  });
}

function allCategory(){
  displayCards(products);
}

function btnCick(index) {
  //  console.log(btn[index]);

  let filterPro = products.filter((item) => {
    // console.log(item.category);
    return item.category === btn[index];
  });
  //  console.log(filterPro);

  displayCards(filterPro);
}
