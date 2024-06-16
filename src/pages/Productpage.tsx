import Filters from "../components/Filters";
import Product from "../components/Product";


export default function Productpage() {
  return (
    <div >
      <div className="text-center">
        <span className="flex items-center justify-center gap-5 font-semibold">
        <h3>Home</h3> <i className="fa-solid fa-angle-right"></i> <h3>Products</h3>
        </span>
        <h1 className="my-4 text-4xl font-semibold">PRODUCTS</h1>
      </div>
      <section className="w-[90%] flex m-auto">
        
      <Filters/>
      <Product/>
      </section>
    </div>
  )
}

