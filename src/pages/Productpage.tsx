import Filters from "../components/Filters";
import Options from "../components/Options";
import Product from "../components/Product";


export default function Productpage() {
  return (
    <div className="w-[90%] m-auto">
      <div className="text-center">
        <span className="flex items-center justify-center gap-5 text-sm font-semibold">
        <h3>Home</h3> <i className="fa-solid fa-angle-right"></i> <h3>Products</h3>
        </span>
        <h1 className="my-4 text-4xl font-semibold">PRODUCTS</h1>
      </div>
      <section className="flex gap-14">
        
      <Filters/>
      <Product/>
      </section>
      <div className="border-t-2 border-black">
        
      <Options/>
      
      </div>
    </div>
  )
}

