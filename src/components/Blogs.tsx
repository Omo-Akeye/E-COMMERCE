import blog1 from '../assets/full-shot-greek-goddess-posing-beach_23-2150261193.jpg'
import blog2 from '../assets/blog1.jpg'
import blog3 from '../assets/blog2.jpg'
import blog4 from '../assets/outdated-fashion-trends-2023-cover.webp'
import blog5 from '../assets/person-surrounded-by-wavy-text_23-2150039710.jpg'
import blog6 from '../assets/gen-z-person-exploring-absurdist-fashion-beauty_23-2151104070.jpg'

export default function Blogs() {
  return (
  <div className=' bg-light-gray'>
     <section className='w-[90%] m-auto text-center p-12'>
    <h1 className='mb-6 text-4xl font-semibold uppercase'>Our Blogs</h1>
     <div className='flex gap-4'>
        <div>
            <img src={blog5} alt="" className='h-[220px] object-cover w-[300px] mb-4' />
            <img src={blog2} alt="" className='h-[220px] object-cover w-[300px]' />
        </div>
        <div >
            <img src={blog1} alt="" className='w-[320px] object-cover h-[350px] mb-4' />
            <div className='flex gap-4'>
                <img src={blog4} alt="" className='h-[150px] object-cover w-[150px]' />
                <img src={blog6} alt="" className='h-[100px] object-cover w-[150px]'/>
            </div>
        </div>
        <div>
            <img src={blog3} alt="" className='h-[220px] object-cover w-[300px] mb-4' />
            <img src={blog5} alt="" className='h-[220px] object-cover w-[300px]' />
        </div>
    </div>
   </section>
  </div>
  )
}
