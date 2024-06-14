import bg1 from '../assets/back-view-women-posing-holding-each-other-as-sign-sisterhood_23-2148442309.jpg'
import bg2 from '../assets/slidebg2.jpg'
import bg3 from '../assets/looking-straight-showing-gestures-two-sisters-twins-standing-posing_146671-14264.jpg'
import { useEffect, useState } from 'react';
import Button from './Button';




const images = [bg1, bg2, bg3];

export default function Favourite() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className='w-full m-auto relative my-12'>
    <img src={images[currentImageIndex]} alt="" className='w-full h-[250px] object-cover drop-shadow-xl'/>
    <div className='absolute top-[10%] text-left w-[40%] left-[5%]'>
     <h1 className='text-3xl font-semibold'>YOUR FAVOURITE DRESS UP TO 70% OFF</h1>
     <p className='text-sm my-4'>Elevate your wardrobe with our exclusive offer. For a limited time only,explore our curated collection of chic 
      clothing,stylish, shoes and statement accessories at irresistible prices.
     </p>
     <Button>Shop Now</Button>
    </div>
  </div>
  )
}
