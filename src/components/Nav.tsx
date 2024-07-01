import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <div className="w-[90%] m-auto flex justify-between font-medium my-4 text-sm">
        <ul className="flex gap-3">
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/product'>COLLECTIONS</Link>
            </li>
           <li>
           <Link to='/'>DEALS</Link>
           </li>
        </ul>

        <div>
            <h2>Logo.</h2>
        </div>

       <ul className="flex gap-5">
           <li>
           <Link to='/'>BLOGS</Link>
           </li>

           <li>
           <Link to='/wishlist' className="px-[6px] py-1 bg-black rounded-full">
           <i className="text-sm text-white fa-regular fa-heart"></i>
           </Link>
           </li>

           <li>
           <Link to='/cart'>CART<i className="fa-solid fa-cart-shopping"></i></Link>
           </li>
           <li>
           <Link to='/' className="bg-black rounded-full px-[7px] py-1">
           <i className="text-sm text-white fa-regular fa-user"></i>
           </Link>
           </li>
       </ul>
    </div>
  )
}
