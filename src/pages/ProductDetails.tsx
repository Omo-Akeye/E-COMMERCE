import { useNavigate, useParams,Link } from "react-router-dom";
import products from "../data/data";
import Options from "./ui/Options";
import { useDispatch } from "react-redux";
import { handleAddCart } from "./cart/cartUtils";
import AlsoLike from "../components/AlsoLike";


export default function ProductDetails() {
    const navigate = useNavigate()
    const { name } = useParams();
    const product = products.find(p => p.name === (name));
    const dispatch = useDispatch();
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
  return (
    <div className="w-[90%] m-auto relative">
       <i className="fa-solid fa-arrow-left-long absolute top-[2%] left-[0] hover:bg-gray-400 p-1 rounded-full cursor-pointer" onClick={()=> navigate(-1)}></i>
        <section className="text-center">
        <span className="flex items-center justify-center gap-5 text-sm font-medium">
        <Link to={'/'}>
       <h3>Home</h3>
       
       </Link> 
        <i className="fa-solid fa-angle-right"></i> <h3>Category</h3> <i className="fa-solid fa-angle-right"></i> <h3 className="capitalize">{product.category}</h3>
        </span>
        <h1 className="my-4 text-4xl font-semibold">PRODUCT DESCRIPTION</h1>
      </section>

      <div className="grid grid-cols-2 gap-12">
        <section className="flex gap-6">
            <div>
                <img src={product.src1} alt="" className="mb-6 w-28 h-28"/>
                <img src={product.src1} alt=""  className="w-28 h-28" />
            </div>
            <img src={product.src} alt="" className="w-[400px] h-[350px]"/>
        </section>

        <section>
            <div className="flex justify-between">
                <div>
                <h1 className="font-semibold">{product.name}</h1>
                <p className="my-2 text-sm text-gray-400">{product.description}</p>
                <ul className="flex gap-1 [&_li]:text-[#FFD700]">
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
          
          
          <p  className="text-sm text-gray-400">(1345)</p>
          </ul>
                </div>
                
                <p >${product.price}</p>
            </div>
            <p className="my-3 text-sm text-gray-400">{product.Full_Description}</p>
            
            <section>
              <h2 className="mb-2 font-semibold">Select Colors</h2>
              <ul className="flex gap-8 [&_li]:w-10 [&_li]:h-10 [&_li]:shadow-sm">
                <li className="bg-black rounded "></li>
                <li className="rounded bg-slate-600"></li>
                <li className="bg-orange-600 rounded "></li>
                <li className="bg-green-700 rounded "></li>
                <li className="bg-blue-800 rounded "></li>
              </ul>

              <h2 className="mb-2 font-semibold">Select Size</h2>
              <ul className="flex gap-6 text-sm font-semibold [&_li]:bg-gray-300 [&_li]:w-8 [&_li]:h-8 [&_li]:p-2">
                <li >XS</li>
                <li >S</li>
                <li >M</li>
                <li >XL</li>
                <li >L</li>
              </ul>
              
              <div className="flex items-center gap-4 mt-4">
              <button className="py-2 text-sm text-white bg-black rounded-sm px-14" onClick={(e) => handleAddCart(e,product,dispatch)} >ADD TO BAG</button>
              <i className="w-8 h-8 p-2 bg-gray-300 fa-regular fa-heart"></i>
              </div>
            </section>
        </section>
      </div>
    
        <AlsoLike/>
        <div className="border-t-2 border-black">
        
        <Options/>
        
        </div>
    </div>
  )
}
