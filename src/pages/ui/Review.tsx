import passport from '/src/assets/passport.jpg'

export default function Review() {
  return (
    <div className="w-[90%] m-auto text-center mb-12">
        <h1 className="my-8 text-3xl font-semibold capitalize">Don't just listen to us</h1>
        <section className='flex justify-center gap-8'>
            <div className='p-4 rounded-lg w-[220px] bg-light-gray text-center'>
               <img src={passport} alt="" className='w-12 h-12 m-auto mb-3 rounded-full'/>
               <span >
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star-half"></i>
               </span>
               <p className='my-3 text-sm font-medium text-center text-gray-600'>The cloth i bought from logo was perfect! Superb quality and fit. Received countless
                complements. Definitely shopping here again.
               </p>
               <h3 className='font-bold'>Emily Joseph</h3>
            </div>
            <div className='p-4 rounded-lg w-[220px] bg-light-gray text-center'>
               <img src={passport} alt="" className='w-12 h-12 m-auto mb-3 rounded-full'/>
               <span >
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star"></i>
               <i className="text-sm fa-solid fa-star-half"></i>
               </span>
               <p className='my-3 text-sm font-medium text-center text-gray-600'>The cloth i bought from logo was perfect! Superb quality and fit. Received countless
                complements. Definitely shopping here again.
               </p>
               <h3 className='font-bold'>Emily Joseph</h3>
            </div>
            <div className='p-4 rounded-lg w-[220px] bg-light-gray text-center'>
               <img src={passport} alt="" className='w-12 h-12 m-auto mb-3 rounded-full'/>
               <span className='text-sm' >
               <i className=" fa-solid fa-star"></i>
               <i className=" fa-solid fa-star"></i>
               <i className=" fa-solid fa-star"></i>
               <i className=" fa-solid fa-star"></i>
               <i className=" fa-solid fa-star-half"></i>
               </span>
               <p className='my-3 text-sm font-medium text-center text-gray-600'>The cloth i bought from logo was perfect! Superb quality and fit. Received countless
                complements. Definitely shopping here again.
               </p>
               <h3 className='font-bold'>Emily Joseph</h3>
            </div>
        </section>
    </div>
  )
}
