import HeroImg from '../assets/medium-shot-black-women-posing-together.webp'
import watch from '../assets/smartwatch-screen-digital-device.jpg'
import Button from './Button'
export default function Hero() {
  return (
    <div className='py-4 bg-light-gray'>
      <main className='w-[90%] m-auto flex gap-12 items-center'>
      <section className='flex-1'>
            <h1 className='text-5xl font-bold leading-[60px]'>
                Your
            </h1>
            <h1 className='text-[52px] font-bold leading-[60px]'>
                <span className=' text-peach'>Ultimate</span> Fashion Destination
            </h1>
            <p className='my-4 text-sm'>Discover the latest trends in fashion for men,women and kids. Explore our curated collection of clothing, shoes, and accessories that blend style and comfort seamlessly</p>
           <div className='text-center'>
           <Button>Start Exploring</Button>
           </div>

            <div className='my-6'>
                <h2 className='mb-2 text-sm font-semibold'>Recent Trends</h2>
               <article className='flex justify-between'>
               <div className='bg-white p-2 w-[180px]'>
                    <img src={watch} alt="watch" className='w-[98%] m-auto' />
                    <span className='flex justify-between text-xs'>
                         <div>
                            <p>New Stock</p>
                        <h3 className='font-bold'>Watch sp</h3>
                        <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </div>
                        </div>

                        <div className='text-center'>
                        <i className="text-base fa-regular fa-heart"></i>
                        <p className='font-semibold'>$100</p>
                        </div>
                    </span>
                </div>

                <div className='bg-white p-2 w-[180px]'>
                    <img src={watch} alt="watch" className='w-[98%] m-auto' />
                    <span className='flex justify-between text-xs'>
                         <div>
                            <p>New Stock</p>
                        <h3 className='font-bold'>Watch sp</h3>
                        <div>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </div>
                        </div>

                        <div className='text-center'>
                        <i className="text-base fa-regular fa-heart"></i>
                        <p className='font-semibold'>$100</p>
                        </div>
                    </span>
                </div>
               </article>
            </div>
        </section>

        <section className='flex-1'>
            <div className='w-full h-[500px] '>
                <img src={HeroImg} alt="hero" className='object-contain w-full h-full'/>
            </div>
        </section>
      </main>
    </div>
  )
}
