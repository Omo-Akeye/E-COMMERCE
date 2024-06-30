import { useDispatch, useSelector } from 'react-redux'; 
import { RootState } from '@reduxjs/toolkit/query';
import { handleDecreaseItem, handleDeleteItem, handleIncreaseItem } from './cart/cartUtils';

interface cartItem {
  id: number;
  name: string;
  src: string;
  description: string;
  price: number;
  quantity: number
}

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className="w-[90%] m-auto mt-4">
          <div className='text-sm mb-8'>
            <h2 className='font-semibold'>Shopping Bag</h2>
            <p>{cart.length} items in your bag.</p>
          </div>
          
          <div className='grid-cols-[2fr,1fr] grid'>


          <section>
           { cart.length > 0 ? ( 
            <>
          { cart.map((cartItem: cartItem)=> <main className='flex gap-4 text-sm' key={cartItem.id}>
            <img src={cartItem.src} alt="" className='w-[180px] h-[180px] object-cover'/>
            <div>
             <span className='flex gap-24'>
             <h1 className='font-medium'>{cartItem.name}</h1>
             <p>{cart.price}</p>
             </span>
             

             <div className='text-gray-500 mt-8'>
             <p>{cartItem.description}</p>
              <p className='mt-2'>Color :</p>
              <p>Size : M</p>
              <div className='mt-2 flex items-center gap-2'>
              <p >Quantity : </p>
              <i className="fa-solid fa-square-plus cursor-pointer text-base hover:text-green-600" onClick={() => handleIncreaseItem(dispatch, cartItem.id)}></i>
              <p className='p font-semibold'>{cartItem.quantity}</p>
              
              <i className="fa-solid fa-square-minus cursor-pointer text-base hover:text-red-700" onClick={() => handleDecreaseItem(dispatch, cartItem.id)} ></i>
              
              </div>

              <i 
                          className="fa-solid fa-trash cursor-pointer text-base text-red-600"
                          onClick={() => handleDeleteItem(dispatch, cartItem.id)}
                        ></i>
             
             </div>
            </div>
          </main>
            )
           }
           </>
           ) : (<h2>Cart is empty</h2>) }
             
           
          </section>


          

          </div>
    </div>
  )
}
