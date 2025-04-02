// rooms images
import Room1Img from "./assets/img/rooms/1.png";
import Room1ImgLg from "./assets/img/rooms/1-lg.png";
import Room2Img from "./assets/img/rooms/2.png";
import Room2ImgLg from "./assets/img/rooms/2-lg.png";
import Room3Img from "./assets/img/rooms/3.png";
import Room3ImgLg from "./assets/img/rooms/3-lg.png";
import Room4Img from "./assets/img/rooms/4.png";
import Room4ImgLg from "./assets/img/rooms/4-lg.png";
import Room5Img from "./assets/img/rooms/5.png";
import Room5ImgLg from "./assets/img/rooms/5-lg.png";
import Room6Img from "./assets/img/rooms/6.png";
import Room6ImgLg from "./assets/img/rooms/6-lg.png";
import Room7Img from "./assets/img/rooms/7.png";
import Room7ImgLg from "./assets/img/rooms/7-lg.png";
import Room8Img from "./assets/img/rooms/8.png";
import Room8ImgLg from "./assets/img/rooms/8-lg.png";
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";
export const roomData = [
  {
    id: 1,
    name: "Superior Room",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit facilis error laudantium placeat quia omnis debitis, incidunt in enim magni amet quaerat sit autem earum, eius neque at architecto!
    Labore reprehenderit molestiae delectus laudantium aspernatur quam aperiam et reiciendis corporis doloribus dolores vel non aut molestias explicabo vero, sequi officiis error dolor hic? Reprehenderit maiores rerum placeat facere sunt?
    Magni veniam eaque, dolores modi, fugit natus quisquam blanditiis error culpa a fuga eius suscipit nisi ad veritatis voluptates tenetur eveniet ea sit recusandae repellendus saepe laborum earum? Aliquam, culpa.
    Similique unde voluptatibus cupiditate cumque sapiente neque at quod. Excepturi maiores ipsam eius porro, doloremque aut repudiandae! Harum voluptas natus sit velit! Dicta a itaque quam, doloremque delectus deleniti minus!
    Impedit amet est vitae! Eos repudiandae suscipit, quam magni sunt sequi reiciendis necessitatibus inventore facere et quis excepturi numquam voluptas nobis unde perferendis voluptatum expedita, qui ratione? Sit, consequuntur veniam.`,
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  
  {
    id: 2,
    name: "Signature Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Deluxe Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: "Luxury Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: "Luxury Suite Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: "Deluxe Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: "Luxury Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: "Deluxe Room",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.",
    facilities: [
      { name: "Wifi", icon: "fa-solid fa-wifi" },
      { name: "Coffee", icon: "fa-solid fa-mug-hot" },
      { name: "Bath", icon: "fa-solid fa-bath" },
      { name: "Parking Space", icon: "fa-solid fa-square-parking" },
      { name: "Swimming Pool", icon: "fa-solid fa-water-ladder" },
      { name: "Breakfast", icon: "fa-solid fa-utensils" },
      { name: "GYM", icon: "fa-solid fa-dumbbell" },
      { name: "Drinks", icon: "fa-solid fa-martini-glass-citrus" },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];
