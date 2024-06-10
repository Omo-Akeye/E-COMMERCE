import Button from "./Button";
import women from '../assets/woman-fashion-clothes-pastel-colors_741910-51351.jpg'


export default function QueenAttire() {
  return (
    <div className="text-center w-[90%] m-auto">
        <section>
           <div>
           <h1 className="text-3xl font-semibold">SHE QUEEN ATTIRE</h1>
           <p className="font-medium">"Elevate your elegance with our luminuous women's dresses, crafted for sophistication and style"</p>
           </div>

            <div className="my-4 flex gap-6">
                <div className="relative">
                    <img src={women} alt="" className="w-[300px] h-[300px] object-cover relative"/>
                    <p className="text-2xl font-medium text-white backdrop-blur-sm rotate-90 absolute top-[40%] right-0">50% OFF THIS WEEK</p>
                </div>
              
               
            </div>
            <Button>View all products</Button>
        </section>
    </div>
  )
}
