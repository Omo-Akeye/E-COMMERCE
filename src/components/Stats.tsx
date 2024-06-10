

export default function Stats() {
  return (
    <div className="bg-light-gray">
        <ul className="w-[90%] m-auto flex justify-between text-center py-4">
            <li>
                <h1 className="text-3xl font-semibold">1 million +</h1>
                <p className="text-sm font-medium">Yearly Sales</p>
            </li>
            <li className="border-r-[2px] border-l-[2px] border-black px-16">
                <h1 className="text-3xl font-semibold">95%</h1>
                <p className="text-sm font-medium">Happy Customers</p>
            </li>
            <li>
                <h1 className="text-3xl font-semibold">20k+</h1>
                <p className="text-sm font-medium">Customer Rating</p>
            </li>
        </ul>
    </div>
  )
}
