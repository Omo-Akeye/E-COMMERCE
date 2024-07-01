import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectTotalPrice } from "../../redux/CartSlice";


export default function Summary() {
    const totalPrice = useSelector((state: RootState) => selectTotalPrice(state));
    const tax = totalPrice * 0.05
    const Total = totalPrice + tax
  return (
    <>
      <section className='w-[30%] shadow-md h-fit px-3 py-3'>
            <h2 className='font-semibold text-center mb-4'>Summary</h2>
            <div className='flex justify-between font-medium text-sm mb-4'>
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className='flex justify-between font-medium text-sm mb-4'>
              <p>Estimated Shipping</p>
              <p>-</p>
            </div>
            <div className='flex justify-between font-medium text-sm mb-4'>
              <p>Estimated Tax</p>
              <p>${tax}</p>
            </div>
            <div className='flex justify-between font-medium text-sm border-t-[2px] border-b-[2px] py-2 mb-4'>
              <p>Total</p>
              <p>${Total}</p>
            </div>

            <div className='w-full bg-black text-white py-2 text-center text-sm mb-2 cursor-pointer'>Pay with Stripe</div>
            <div className='w-full bg-purple-700 text-white py-2 text-center text-sm cursor-pointer'>Pay with PayStack</div>
          </section>

    </>
  )
}
