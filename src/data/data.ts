import product1 from '../assets/black-woman-with-daisy-flowers-jeans-pocket_23-2148098520.jpg'
import product1_1 from '../assets/black-woman-with-daisy-flowers-jeans-pocket-laughing_23-2148098524.jpg'
import product1_2 from '../assets/black-woman-with-daisy-flowers-jeans-pocket_23-2148098520.jpg'
import product2 from '../assets/portrait-young-man-with-hat_23-2148884260.jpg'
import product2_1 from '../assets/portrait-young-man-with-hat_23-2148884264.jpg'
import product2_2 from  '../assets/portrait-young-handsome-male_23-2148884404.jpg'
import product3 from '../assets/241857_BLACK_4.jpeg'
import product3_1 from '../assets/241857_BLACK_5.jpeg'
import product3_2 from  '../assets/241857_BLACK_1.jpeg'
import product4 from '../assets/246756_DK-BLUE_1.jpeg'
import product4_1 from '../assets/246756_DK-BLUE_4.jpeg'
import product4_2 from '../assets/246756_DK-BLUE_5.jpeg'
import product5 from  '../assets/attractive-man-white-tshirt-communication-by-phone-lifestyle-unaltered_561613-10184.jpg' 
import product5_1 from '../assets/handsome-man-white-tshirt-fashion-cropped-view-isolated-background_561613-15078.jpg'
import product5_2 from  '../assets/cheerful-man-white-tshirt-fashion-cropped-view-isolated-background_561613-20957.jpg'
import product6 from '../assets/confident-woman-being-body-positive_23-2148974041.jpg'
import product6_1 from '../assets/confident-woman-being-body-positive_23-2148974044.jpg'
import product6_2 from '../assets/confident-woman-supporting-body-positivity_23-2148974049.jpg'
import product7 from '../assets/medium-shot-man-holding-small-bottle_23-2149343970.jpg'
import product7_1 from '../assets/medium-shot-smiley-man-applying-spray_23-2149343973.jpg'
import product7_2 from  '../assets/man-applying-face-serum-medium-shot_23-2149343962.jpg'
import product8 from '../assets/close-up-portrait-man-shirt-mockup_23-2149260883.jpg'
import product8_1 from '../assets/close-up-portrait-man-shirt-mockup_23-2149260897.jpg'
import product8_2 from '../assets/close-up-portrait-man-shirt-mockup_23-2149260885.jpg'
import product9 from '../assets/medium-shot-woman-wearing-blank-shirt_23-2149345049.jpg'
import product9_1 from '../assets/47.jpg'
import product9_2 from  '../assets/Mediumshort.jpg'
import product10 from '../assets/Hhddgh.jpg'
import product10_1 from '../assets/Fashioncasual.jpg'
import product10_2 from '../assets/Blackwomanhappy.jpg'
import product11 from  '../assets/portrait-carefree-charmin.jpg'
import product11_1 from '../assets/irritated-displeased-pissed-youn12.jpg'
import product11_2 from '../assets/Thteergju.jpg'
import product12 from   '../assets/woman-with-curly-hair-posing-confident-way_23-2148974006.jpg'
import product12_1 from  '../assets/woman-with-curly-hair-posing-confident-way_23-2148974007.jpg'
import product12_2 from  '../assets/woman-with-curly-hair-posing-confident-way_23-2148974007.jpg'

const products = [
  {
    id: 1,
    name: "Full Sleeve Black T-Shirt",
    description: "Cotton",
    category: 'women',
    src: product1,
    src1: product1_1,
    src2: product1_2,
    price: 120,
    Full_Description: 'The crop top features a trendy cropped silhouette with a flattering round neckline and full sleeves, providing a chic and effortless look. Paired with coordinating jogger pants crafted with a comfortable elasticized waistband and tapered legs.'
  },
  {
    id: 2,
    name: "Classic Fedora Hat",
    description: "Felt",
    category: 'men',
    src: product2_1,
    src1: product2,
    src2: product2_2,
    price: 150,
    Full_Description: 'This classic fedora hat is made from high-quality felt material, providing both style and durability. Its timeless design features a wide brim and a sleek band, making it the perfect accessory for any outfit, whether casual or formal.'
  },
  {
    id: 3,
    name: "Black Leather Jacket",
    description: "Zipper",
    category: 'men',
    src: product3,
    src1: product3_1,
    src2: product3_2,
    price: 300,
    Full_Description: 'Elevate your style with this premium black leather jacket. Featuring a smooth zipper closure and multiple pockets for convenience, this jacket combines functionality with edgy fashion. Ideal for adding a tough, sophisticated layer to any ensemble.'
  },
  {
    id: 4,
    name: "Dark Blue Denim Jacket",
    description: "Button Closure",
    src: product4,
    category: 'men',
    src1: product4_1,
    src2: product4_2,
    price: 280,
    Full_Description: 'This dark blue denim jacket is a wardrobe staple. With its classic button closure and versatile design, it pairs well with a variety of outfits. The durable denim material ensures long-lasting wear, while the tailored fit adds a touch of modernity.'
  },
  {
    id: 5,
    name: "Basic White T-Shirt",
    description: "Cotton",
    category: 'men',
    src: product5,
    src1: product5_1,
    src2: product5_2,
    price: 100,
    Full_Description: 'A basic white t-shirt is an essential for any wardrobe. Made from soft, breathable cotton, this t-shirt offers comfort and simplicity. Its versatile design makes it perfect for layering or wearing on its own for a clean, casual look.'
  },
  {
    id: 6,
    name: "Body Positive T-Shirt",
    description: "Empowering",
    category: 'women',
    src: product6,
    src1: product6_1,
    src2: product6_2,
    price: 130,
    Full_Description: 'Show your support for body positivity with this empowering t-shirt. Crafted from comfortable, high-quality fabric, it features a bold, encouraging message. Wear it proudly to spread positivity and self-love wherever you go.'
  },
  {
    id: 7,
    name: "Portable Bottle Holder",
    description: "Convenient",
    category: 'men',
    src: product7,
    src1: product7_1,
    src2: product7_2,
    price: 110,
    Full_Description: 'Stay hydrated on the go with this portable bottle holder. Designed for convenience, it securely holds your bottle while you are out and about. Its adjustable strap and lightweight material make it easy to carry, whether you re hiking, running, or just on the move.'
  },
  {
    id: 8,
    name: "Mockup Designer Shirt",
    description: "High-Quality",
    category: 'men',
    src: product8,
    src1: product8_1,
    src2: product8_2,
    price: 140,
    Full_Description: 'This mockup designer shirt combines style and quality. Crafted from premium materials, it offers a high-end look and feel. The shirt’s tailored fit and attention to detail make it a perfect choice for fashion-forward individuals.'
  },
  {
    id: 9,
    name: "Versatile Blank Shirt",
    category: 'women',
    description: "Staple",
    src: product9,
    src1: product9_1,
    src2: product9_2,
    price: 115,
    Full_Description: 'The versatile blank shirt is a staple piece for any wardrobe. Its minimalist design allows for endless styling possibilities, making it a great foundation for any outfit. Made from soft, durable fabric, it ensures both comfort and longevity.'
  },
  {
    id: 10,
    name: "Carefree Charm T-Shirt",
    description: "Casual",
    category: 'women',
    src: product10,
    src1: product10_1,
    src2: product10_2,
    price: 200,
    Full_Description: 'Embrace a laid-back vibe with the Carefree Charm T-Shirt. Perfect for casual wear, it features a relaxed fit and a soft, comfortable fabric. Its easygoing style makes it a great choice for everyday wear or weekend outings.'
  },
  {
    id: 11,
    name: "Charming Portrait T-Shirt",
    description: "Elegant",
    category: 'women',
    src: product11,
    src1: product11_1,
    src2: product11_2,
    price: 170,
    Full_Description: 'Add a touch of elegance to your casual wardrobe with the Charming Portrait T-Shirt. The intricate portrait design and high-quality print make it a standout piece. Its comfortable fit and stylish look make it suitable for various occasions.'
  },
  {
    id: 12,
    name: "Curly Hair Confidence Tee",
    description: "Bold",
    category: 'women',
    src: product12,
    src1: product12_1,
    src2: product12_2,
    price: 180,
    Full_Description: 'Celebrate your natural beauty with the Curly Hair Confidence Tee. This bold t-shirt features a striking design that highlights curly hair. Made from soft, breathable fabric, it offers both comfort and style, perfect for showcasing your confidence.'
  }
];

export default products;
