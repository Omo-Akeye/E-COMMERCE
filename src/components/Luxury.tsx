import  {  useRef } from 'react';
import suit1 from '../assets/I2X8VT5P-large.webp';
import suit2 from '../assets/men-s-formal-suit-photography_1409-5589.jpg';
import Button from './Button';

export default function Luxury() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='w-[90%] m-auto text-center py-8'>
      <h1 className='text-3xl font-semibold'>LUXURY ATTIRE</h1>
      <section className='my-8'>
        <div className='flex items-center relative'>
          <i className="fa-solid fa-arrow-left cursor-pointer absolute  left-[5%] p-2 bg-white rounded-full z-10" onClick={scrollLeft}></i>
          <div className='flex w-full overflow-x-auto gallery relative' ref={scrollContainerRef}>
            <img src={suit1} alt="" className='w-[200px] h-[200px] object-cover' />
            <img src={suit2} alt="" className='w-[200px] h-[200px] object-cover' />
            <img src={suit1} alt="" className='w-[200px] h-[200px] object-cover' />
            <img src={suit2} alt="" className='w-[200px] h-[200px] object-cover' />
            <img src={suit1} alt="" className='w-[200px] h-[200px] object-cover' />
            <img src={suit2} alt="" className='w-[200px] h-[200px] object-cover' />
          </div>
          <i className="fa-solid fa-arrow-right cursor-pointer  absolute right-[5%] p-2 bg-white rounded-full" onClick={scrollRight}></i>

          <div className='absolute w-full backdrop-blur-sm bottom-0'>
     <ul className='flex text-xl font-medium items-center justify-between text-white'>
            <li>MAKE SENSE</li>
            <li><i className="fa-solid fa-circle text-xs"></i></li>
            <li>40% OFF GOING ON</li>
            <li><i className="fa-solid fa-circle text-xs"></i></li>
            <li>OCCASIONAL KING</li>
            <li><i className="fa-solid fa-circle text-xs"></i></li>
            <li>ONLY MAKE SENSE</li>
        </ul>
     </div>
        </div>
  
      </section>
      <Button>View all products</Button>
    </div>
  );
}
