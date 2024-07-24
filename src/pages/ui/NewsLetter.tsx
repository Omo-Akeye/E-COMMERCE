
export default function NewsLetter() {
  return (
    <div className="p-6 bg-light-gray">
     <main className="flex justify-center gap-16 py-6 bg-white">
     <section>
            <span className="flex items-baseline">
                <h3 className="font-bold">NEWS</h3>
                <h1 className="text-4xl font-bold">LETTER</h1>
            </span>
        </section>
        <section className="bg-black w-[400px] p-2 flex justify-between">
            <input type="text" className="text-light-gray bg-inherit w-[70%] outline-none" placeholder="Enter your Email" />
            <button className="bg-white w-[25%] px-3">Subscribe</button>
        </section>
     </main>
    </div>
  )
}
