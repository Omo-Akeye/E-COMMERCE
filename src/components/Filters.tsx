import { useState } from "react"
import PriceRange from "./PriceRange"


export default function Filters() {
  
  const [IsAvailOpen,setIsAvailOpen] = useState<boolean>(true)
  const [IsCategoryOpen,setIsCategoryOpen] = useState<boolean>(true)
  const [IsColorsOpen,setIsColorsOpen] = useState<boolean>(true)
  const [IsCollectionOpen,setIsCollectionOpen] = useState<boolean>(true)
  const [IsTagOpen,setIsTagOpen] = useState<boolean>(true)
  const [IsRatingOpen,setIsRatingOpen] = useState<boolean>(true)
  return (
    <div className="w-[20%]">
       <h1 className="font-semibold">Filters</h1>
       <section className="pb-3 border-b-2">
        <h2 className="text-sm font-semibold">Size</h2>
        <ul className="flex gap-1">
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">XS</li>
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">S</li>
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">M</li>
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">L</li>
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">XL</li>
          <li className="border-[2px] border-gray-400 text-sm font-medium p-1 text-gray-400">2X</li>
        </ul>
       </section>
       
       <section className="py-3 text-sm font-medium border-b-2">
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Availability</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsAvailOpen(!IsAvailOpen)}></i>
        </div>
       {
        IsAvailOpen && (
          <main>
          <span className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>In Stock (450)</p>
          </span>
          <span className="flex gap-2 mt-1">
          <input type="checkbox" name="" id="" />
          <p>Out of Stock (18)</p>
          </span>
          
        </main>
        )
       }
       </section>

       <section className="py-3 text-sm font-medium border-b-2">
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Category</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsCategoryOpen(!IsCategoryOpen)}></i>
        </div>
       {
        IsCategoryOpen && (
          <ul>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Men</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Women</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Kids</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Watches</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Shoes</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Luxury Attire</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Accessories</p>
          </li>
          
        </ul>
        )
       }
       </section>

       <section className="py-3 text-sm font-medium border-b-2">
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Colors</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsColorsOpen(!IsColorsOpen)}></i>
        </div>
       {
        IsColorsOpen && (
         <ul className="grid w-3/5 grid-cols-5 gap-3 mt-2">
          <li className="w-4 h-4 bg-red-800 rounded-sm"></li>
          <li className="w-4 h-4 bg-gray-600 rounded-sm"></li>
          <li className="w-4 h-4 bg-yellow-300 rounded-sm"></li>
          <li className="w-4 h-4 bg-blue-700 rounded-sm"></li>
          <li className="w-4 h-4 bg-pink-600 rounded-sm"></li>
          <li className="w-4 h-4 bg-black rounded-sm"></li>
          <li className="w-4 h-4 bg-green-800 rounded-sm"></li>
          <li className="w-4 h-4 bg-purple-800 rounded-sm"></li>
          <li className="w-4 h-4 bg-orange-800 rounded-sm"></li>
          <li className="w-4 h-4 rounded-sm bg-lime-900"></li>
          <li className="w-4 h-4 bg-indigo-800 rounded-sm"></li>
          <li className="w-4 h-4 bg-orange-900 rounded-sm"></li>
          <li className="w-4 h-4 rounded-sm bg-lime-800"></li>
          <li className="w-4 h-4 rounded-sm bg-violet-800"></li>
          <li className="w-4 h-4 rounded-sm bg-light-gray"></li>
         </ul>
        )
       }
       </section>

       <section>
        <PriceRange/>
       </section>

       <section className="py-3 text-sm font-medium border-b-2">
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Collections</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsCollectionOpen(!IsCollectionOpen)}></i>
        </div>
       {
        IsCollectionOpen && (
          <ul>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Featured</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>New Arrivals</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Deal of the day</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Best Seller</p>
          </li>
          
        </ul>
        )
       }
       </section>

       <section className="py-3 text-sm font-medium border-b-2"> 
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Tags</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsTagOpen(!IsTagOpen)}></i>
        </div>
       {
        IsTagOpen && (
          <ul>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Trends</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Bags</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Shorts</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Shirts</p>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Trousers</p>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <p>Flats</p>
          </li>

          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Jerkins</p>
          </li>
          
        </ul>
        )
       }
       </section>


       <section className="py-3 text-sm font-medium">
        <div className="flex justify-between mb-1">
          <h2 className="font-semibold">Ratings</h2>
          <i className="cursor-pointer fa-solid fa-chevron-down" onClick={()=> setIsRatingOpen(!IsRatingOpen)}></i>
        </div>
       {
        IsRatingOpen && (
          <ul>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          </div>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          </div>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          </div>
          </li>
          <li className="flex gap-2 my-1">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          </div>
          </li>
          <li className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <div className="flex gap-1">
          <i className=" text-[#FFD700] fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          <i className="text-gray-300 fa-solid fa-star"></i>
          </div>
          </li>
        
          
        </ul>
        )
       }
       </section>
    </div>
  )
}
