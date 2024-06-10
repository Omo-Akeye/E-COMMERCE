import women from '../assets/woman-wearing-blank-shirt-medium-shot.jpg'
import shirt from '../assets/shirt-mockup-concept-with-plain-clothing.jpg'
import hangedShirt from '../assets/shirt-mockup-concept-with-plain-clothing_23-2149448752.jpg'



const deals = [
    {
        id: 1,
        src: women,
        description: 'Premium Sweatshirt',
        price: '$200'
    },
    {
        id: 2,
        src: shirt,
        description: 'Plain White T-shirt',
        price: '$600'
    },
    {
        id: 3,
        src: hangedShirt,
        description: '4-wear Combo',
        price: '$600'
    }
]

export default function DealsCard() {
  return (
    <div>
        <div className='flex w-[60%] m-auto gap-11'>

            {
                deals.map(deal => (
                    <div key={deal.id} className='bg-white p-2 w-[160px]'>
                    
                    
                    <div className='w-[98%] h-[200px] flex items-center justify-center'>
                    <img src={deal.src} alt="watch" className='w-full h-full object-contain' />
                    </div>
                    
                    
                    <span className='flex justify-between text-xs mt-2'>
                    <div>
                    <h3 className='font-bold capitalize'>{deal.description}</h3>
                    <div className='flex'>
                    <p className='font-semibold mr-2'>{deal.price}</p>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    </div>

                    <div className='flex justify-center'>
                    <span className='bg-black text-white px-[8px] py-1 font-bold cursor-pointer'>+</span>
                    
                    </div>
                </span>
                </div>
                ))
            }  
                </div>
    </div>
  )
}
