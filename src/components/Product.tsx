import products from '../data/data.js'

export default function Product() {
  return (
    <div className="w-[80%]">
      <div className="flex items-center justify-end gap-2">
      <p>Sort by:</p> <h3 className="font-semibold">Featured</h3><i className="fa-solid fa-angle-down"></i>
      </div>
      <section className='grid grid-cols-3'>
        {
            products.map(product => (
                <div>
                    <img src={product.src} alt="" className='object-contain w-[250px] h-[250px]'/>
                    <p>{product.description}</p>
                    <span>
                        <h3>{product.name}</h3> <p>{product.price}</p>
                    </span>
                </div>
            ))
        }
      </section>
    </div>
  )
}
