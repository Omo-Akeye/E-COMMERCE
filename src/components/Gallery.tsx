import { useRef } from 'react';
import image1 from '../assets/beautiful-fashion-woman-posing-with-elegant-suit_1328-3308.jpg';
import image2 from '../assets/Jackets for Men 2019 _ Mango Man United Kingdom.jpeg';
import image3 from '../assets/Brown-leather-band-for-space-black-stainless-steel-Apple-Watch-Ingenium-Coffee_1000x.jpg';
import image4 from '../assets/shirt-mockup-concept-with-plain-clothing.jpg';
import image5 from '../assets/Ha004017c2b0d49ac85cdfbe05d9c2538V.jpg_640x640Q90.jpg_.webp';



interface Image {
  id: number;
  src: string;
  description: string;
}
const img:Image[] = [
  { id: 1, src: image1, description: 'women' },
  { id: 2, src: image2, description: 'men' },
  { id: 3, src: image3, description: 'watches' },
  { id: 4, src: image4, description: 'shirts' },
  { id: 5, src: image5, description: 'bags' },
  { id: 6, src: image1, description: 'women' }
];

export default function Gallery() {
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
    <div className='py-8 text-center '>
      <h1 className='text-3xl font-semibold'>Gallery</h1>
      <section className='my-8'>
        <div className='relative flex items-center'>
          <i className="fa-solid fa-arrow-left cursor-pointer absolute left-[5%] p-2 bg-white rounded-full z-10" onClick={scrollLeft}></i>
          <div className='relative flex w-full gap-1 overflow-x-auto gallery' ref={scrollContainerRef}>
            {img.map((image) => (
              <div key={image.id} className='block'>
                <div className="w-[250px] h-[250px]">
                  <img src={image.src} alt={image.description} className='object-cover w-full h-full' />
                </div>
                <h2 className='mt-2 text-2xl font-semibold text-center uppercase'>{image.description}</h2>
              </div>
            ))}
          </div>
          <i className="fa-solid fa-arrow-right cursor-pointer absolute right-[5%] p-2 bg-white rounded-full" onClick={scrollRight}></i>
        </div>
      </section>
    </div>
  );
}
