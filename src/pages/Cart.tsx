import { useDispatch, useSelector } from 'react-redux'; 

import { handleDecreaseItem, handleDeleteItem, handleIncreaseItem } from './cart/cartUtils';
import Summary from './cart/Summary';
import Options from './ui/Options';
import { RootState } from '../store';
import { CartItem } from '../components/types';



export default function Cart() {
  const dispatch = useDispatch()
  
  const cart = useSelector((state: RootState) => state.cart.cart);
  return ( 
    <>
    <div className="w-[90%] m-auto mt-8 mb-8">
         
          
          <div className='flex gap-28'>


          <section className='w-[60%]'>

          <div className='text-sm mb-8'>
            <h2 className='font-semibold'>Shopping Bag</h2>
            <p>{cart.length} items in your bag.</p>
          </div>
           { cart.length > 0 ? ( 
            <>
          { cart.map((cartItem: CartItem) => <main className='flex text-sm mb-4 gap-4' key={cartItem.id}>
            <img src={cartItem.src} alt="" className='w-[150px] h-[150px] object-cover'/>
            <div className='flex w-[60%] justify-between'>
            

            <main>
            
             <h1 className='font-medium'>{cartItem.name}</h1>
             
             

             <div className='text-gray-500 mt-8'>
             <p>{cartItem.description}</p>
              <p className='mt-2'>Color :</p>
              <p>Size : M</p>
              <div className='mt-2 flex items-center gap-2'>
              <p >Quantity : </p>
              <i className="fa-solid fa-square-minus cursor-pointer text-base hover:text-red-700" onClick={() => handleDecreaseItem(dispatch, cartItem.id)} ></i>
              <p className='p font-semibold'>{cartItem.quantity}</p>
              <i className="fa-solid fa-square-plus cursor-pointer text-base hover:text-green-600" onClick={() => handleIncreaseItem(dispatch, cartItem.id)}></i>
              
              
              </div>

              <i 
                          className="fa-solid fa-trash cursor-pointer text-base text-red-600"
                          onClick={() => handleDeleteItem(dispatch, cartItem.id)}
                        ></i>
             
             </div>
            </main>

            <section>
              <p className='font-mono font-semibold text-right'>${cartItem.price}</p>
            </section>
            </div>
          </main>
            )
           }
           </>
           ) : (<h2 className='font-semibold'>Cart is empty</h2>) }
             
           
          </section>


          <Summary/>
          </div>
    </div>

    <div className="border-t-2 border-black">
        
      <Options/>
      
      </div>
    </>
  )
}
