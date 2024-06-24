import { Link } from "react-router-dom";
import products from '../data/data';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  src: string;
}

export default function AlsoLike() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }

    setRandomProducts(shuffledProducts.slice(0, 8));
  }, []);

  return (
   <div className="my-10">
    <h1 className="font-semibold">You might also like</h1>
    <Link to={'/product'} className="font-semibold flex justify-end items-center gap-1">See all <i className="fa-solid fa-arrow-right"></i></Link>
     <section className='grid grid-cols-4 my-4 gap-y-10'>
      {randomProducts.map((product: Product) => (
        <Link to={`/product/${product.name}`} key={product.id}>
          <div className="overflow-hidden bg-white shadow-md max-w-56">
            <div className='relative'>
              <img
                className="relative object-cover object-center w-full h-60"
                src={product.src}
                alt={product.name}
              />
              <button className="absolute flex items-center p-2 font-medium uppercase bg-white rounded-full shadow-md -text-xs top-4 right-4">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button className="absolute flex items-center px-3 py-2 text-xs font-medium uppercase bg-white rounded-full shadow-md bottom-4 right-4">
                <i className="mr-1 fa-solid fa-circle-plus"></i> Add
              </button>
            </div>
            <div className="">
              <p className="mt-2 text-xs text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between text-sm font-semibold">
                <h1>{product.name}</h1>
                <span>${product.price}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
   </div>
  );
}
