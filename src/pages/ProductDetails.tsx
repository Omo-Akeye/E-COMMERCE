import { useNavigate, useParams } from "react-router-dom";
import products from "../data/data";
import AlsoLike from "../components/AlsoLike";
import Options from "../components/Options";


export default function ProductDetails() {
    const navigate = useNavigate()
    const { name } = useParams();
    const product = products.find(p => p.name === (name));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
  return (
    <div className="w-[90%] m-auto relative">
       <i className="fa-solid fa-arrow-left-long absolute top-[2%] left-[0] hover:bg-gray-400 p-1 rounded-full cursor-pointer" onClick={()=> navigate(-1)}></i>
        <section className="text-center">
        <span className="flex items-center justify-center gap-5 text-sm font-medium">
        <h3>Home</h3> <i className="fa-solid fa-angle-right"></i> <h3>Category</h3> <i className="fa-solid fa-angle-right"></i> <h3 className="capitalize">{product.category}</h3>
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
                <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <p  className="text-sm text-gray-400">(1345)</p>
          </div>
                </div>
                
                <p >${product.price}</p>
            </div>
            <p className="my-3 text-sm text-gray-400">{product.Full_Description}</p>
            
            <section>
              <h2 className="mb-2 font-semibold">Select Colors</h2>
              <ul className="flex gap-8">
                <li className="w-10 h-10 bg-black rounded shadow-sm"></li>
                <li className="w-10 h-10 rounded shadow-sm bg-slate-600"></li>
                <li className="w-10 h-10 bg-orange-600 rounded shadow-sm"></li>
                <li className="w-10 h-10 bg-green-700 rounded shadow-sm"></li>
                <li className="w-10 h-10 bg-blue-800 rounded shadow-sm"></li>
              </ul>

              <h2 className="mb-2 font-semibold">Select Size</h2>
              <ul className="flex gap-6">
                <li className="w-8 h-8 p-2 text-sm font-semibold bg-gray-300">XS</li>
                <li className="w-8 h-8 p-2 text-sm font-semibold bg-gray-300">S</li>
                <li className="w-8 h-8 p-2 text-sm font-semibold bg-gray-300">M</li>
                <li className="w-8 h-8 p-2 text-sm font-semibold bg-gray-300">L</li>
                <li className="w-8 h-8 p-2 text-sm font-semibold bg-gray-300">XL</li>
              </ul>
              
              <div className="flex items-center gap-4 mt-4">
              <button className="py-2 text-sm text-white bg-black rounded-sm px-14">ADD TO BAG</button>
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
