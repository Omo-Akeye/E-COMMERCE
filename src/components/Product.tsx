import products from '../data/data.js'

export default function Product() {
  return (
    <div className="w-[80%]">
      <div className="flex items-center justify-end gap-2">
      <p>Sort by:</p> <h3 className="font-semibold">Featured</h3><i className="fa-solid fa-angle-down"></i>
      </div>
      <section className='grid grid-cols-3 gap-6'>
        {
            products.map(product => (
              
                <div className="overflow-hidden bg-white shadow-md max-w-56">
               <div className='relative'>
               <img 
                  className="relative object-cover object-center w-full h-60" 
                  src={product.src} 
                  alt={product.name}
                />
                  <button className="absolute flex items-center p-2 font-medium uppercase bg-white rounded-full shadow-md -text-xs top-4 right-4">
                  <i className="fa-regular fa-heart"></i>
                    </button>
                 <button className="absolute flex items-center px-3 py-2 text-xs font-medium uppercase bg-white rounded-full shadow-md bottom-4 right-4">
                 <i className="mr-1 fa-solid fa-circle-plus"></i> Add 
                    </button>
               </div>
                <div className="">
                <p className="mt-2 text-xs text-gray-600">{product.description}</p>
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <h1>{product.name}</h1>
                    <span >${product.price}</span>
                  </div>
                  
                </div>
              </div>
            ))
        }
      </section>

      <div className='flex items-center justify-center gap-4 my-8'>
      <i className="border-[2px] fa-solid fa-chevron-left border-gray-300 p-3 rounded-full text-gray-300"></i>
      <span className='border-[2px] py-2 px-3 border-black font-medium'>1</span>
      <p>of</p>
      <span className='border-[2px] py-2 px-3 border-black font-medium'>30</span>
      <i className="border-[2px] fa-solid fa-chevron-right border-gray-300 p-3 rounded-full text-gray-300"></i>
      </div>
    </div>
  )
}
