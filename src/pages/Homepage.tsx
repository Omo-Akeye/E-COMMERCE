
import Blogs from "./ui/Blogs";
import Collections from "../components/Collections";
import Deals from "./ui/Deals";
import Favourite from "../components/Favourite";

import Hero from "./ui/Hero";
import Luxury from "../components/Luxury";
import NewsLetter from "./ui/NewsLetter";

import Options from "./ui/Options";
import QueenAttire from "./ui/QueenAttire";
import Review from "./ui/Review";
import Scroll from "./ui/Scroll";
import ShopByCategory from "./ui/ShopByCategory";
import Stats from "./ui/Stats";
import Think from "./ui/Think";


export default function Homepage() {
  return (
    <div>
      <Hero/>
      <Options/>
      <Collections/>
      <Scroll/>
      <ShopByCategory/>
      <Deals/>
      <Luxury/>
      <Stats/>
      <QueenAttire/>
      <Favourite/>
      <Think/>
      <Blogs/>
      <Review/>
      <NewsLetter/>
    
      
      
      
      
    </div>
  )
}

