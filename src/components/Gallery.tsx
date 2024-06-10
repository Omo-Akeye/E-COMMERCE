
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import image1 from '../assets/beautiful-fashion-woman-posing-with-elegant-suit_1328-3308.jpg'
import image2 from '../assets/Jackets for Men 2019 _ Mango Man United Kingdom.jpeg'
import image3 from '../assets/Brown-leather-band-for-space-black-stainless-steel-Apple-Watch-Ingenium-Coffee_1000x.jpg'
import image4 from '../assets/shirt-mockup-concept-with-plain-clothing.jpg'
import image5 from '../assets/Ha004017c2b0d49ac85cdfbe05d9c2538V.jpg_640x640Q90.jpg_.webp'

const img = [
  {
    id:1 ,
    src: image1,
    description: 'women'
},  {
  id:2 ,
  src: image2,
  description: 'men'
},  {
  id:3 ,
  src: image3,
  description: 'watches'
},  {
  id: 4,
  src: image4,
  description: 'shirts'
},  {
  id:5 ,
  src: image5,
  description: 'bags'
},
{
  id:6 ,
  src: image1,
  description: 'women'
}
 ]



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
    

    {
        img.map((image) => 
         ( <SwiperSlide  key={image.id} className='block'>
          <div>

         
          <div className="flex items-center justify-center w-[250px] h-[250px]">
          <img src={image.src} alt="" className='' />
          </div>
          <h2 className='text-2xl font-semibold text-center uppercase mt-2'>{image.description}</h2>
          </div>
        </SwiperSlide>)
        )
        
      }
     
      </Swiper>
    </>
  );
}
