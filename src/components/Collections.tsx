import youngman from '../assets/young-handsome-man-posing-with-hat.jpg'
import pretty from  '../assets/pretty-young-african-girl-with-short-curly-hairstyle-gray-wall-wearing-gray-cardigan-knitted-jacket-shirt-necklace-with-triangle-stylish-earrings_197531-1745.jpg'
import shoes from '../assets/feature_1.jpg'
import accessories from '../assets/174313-reklama_minimalnyj_dom-gadzhet-obektiv_kamery-zvukovoe_oborudovanie-ochki-x750.jpg'
import Button from './Button'


export default function Collections() {
  return (
    <div className='w-[90%] m-auto grid grid-cols-2 gap-20'>
        <div className='grid gap-4'>
            <section className='relative'>
                <img src={youngman} alt="" className='relative'/>
                <div className='absolute top-[20%] right-[3%]'>
                    <p className='text-xl'>30% OFF</p>
                    <h1 className='text-5xl font-bold'>Men's</h1>
                    <h2 className='text-4xl font-semibold'>Collection</h2>
                    <Button>Show Now</Button>
                </div>
            </section>
            <section className='relative'>
                <img src={accessories} alt="" className='relative w-full'/>
                <div className='absolute top-[10%] right-[2%]'>
                    <h1 className='text-4xl font-bold'>Branded</h1>
                    <h2 className='text-3xl font-semibold'>Accessories</h2>
                    <Button>Show Now</Button>
                </div>
            </section>
        </div>


        <div className='grid gap-4'>
            <section className='relative'>
                <img src={pretty} alt="pretty" className='relative' />
                <div className='absolute top-[20%] left-[3%]'>
                    <p className='text-xl'>30% OFF</p>
                    <h1 className='text-4xl font-bold'>Women's</h1>
                    <h2 className='text-4xl font-semibold'>Collection</h2>
                    <Button>Show Now</Button>
                </div>
            </section>
            <section className='relative'>
                <img src={shoes} alt="" className='relative'/>
                <div className='absolute top-[40%] left-[9%]'>
                    <h1 className='text-5xl font-bold text-white'>Brand<span className='text-black'>ed</span></h1>
                    <h2 className='text-5xl font-semibold'>Shoes</h2>
                    <Button>Show Now</Button>
                </div>
            </section>
        </div>
    </div>
  )
}
