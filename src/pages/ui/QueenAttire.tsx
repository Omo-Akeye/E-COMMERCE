import Button from "../../components/Button";
import women from '/src/assets/woman-fashion-clothes-pastel-colors_741910-51351.jpg'


export default function QueenAttire() {
  return (
    <div className="text-center w-[90%] m-auto my-12">
        <section>
           <div>
           <h1 className="text-3xl font-semibold">SHE QUEEN ATTIRE</h1>
           <p className="font-medium my-6 text-gray-400">"Elevate your elegance with our luminuous women's dresses, crafted for sophistication and style"</p>
           </div>

            <div className="my-4 flex gap-6 justify-center mb-6">
                <div className="relative flex items-center" >
                    <img src={women} alt="" className="w-[200px] h-[300px] object-cover"/>
                    <p className="text-3xl font-medium text-white backdrop-blur-sm rotate-90 absolute left-[16%] w-[300px]">50% OFF THIS WEEK</p>
                </div>
                <div className="relative flex items-center" >
                    <img src={women} alt="" className="w-[200px] h-[300px] object-cover"/>
                    <p className="text-3xl font-medium text-white backdrop-blur-sm rotate-90 absolute left-[16%]  w-[300px]">50% OFF THIS WEEK</p>
                </div>
                <div className="relative flex items-center" >
                    <img src={women} alt="" className="w-[200px] h-[300px] object-cover"/>
                    <p className="text-3xl font-medium text-white backdrop-blur-sm rotate-90 absolute left-[16%]  w-[300px]">50% OFF THIS WEEK</p>
                </div>
                
              
               
            </div>
            <Button>View all products</Button>
        </section>
    </div>
  )
}
