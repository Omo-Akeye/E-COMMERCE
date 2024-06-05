

export default function Options() {
  return (
    <div className="w-[90%] m-auto my-6">
        <ul className="flex justify-between">
            <li className="flex items-center gap-3">
                <i className="text-2xl fa-solid fa-truck-fast"></i>
                <div className="text-sm">
                  <h3 className="font-bold">Free Delivery</h3>
                  <p className="font-medium text-gray-700">Above all orders over $200</p>
                </div>
            </li>

            <li className="flex items-center gap-3">
            <i className="text-2xl fa-solid fa-circle-dollar-to-slot"></i>
                <div className="text-sm">
                  <h3 className="font-bold">Money Guarantee</h3>
                  <p className="font-medium text-gray-700">45 days for Exchange</p>
                </div>
            </li>

            <li className="flex items-center gap-3">
            <i className="text-2xl fa-solid fa-headset"></i>
                <div className="text-sm">
                  <h3 className="font-bold">Online Support</h3>
                  <p className="font-medium text-gray-700">24/7 Customer Care</p>
                </div>
            </li>

            <li className="flex items-center gap-3">
            <i className="text-2xl fa-regular fa-credit-card"></i>
                <div className="text-sm">
                  <h3 className="font-bold">Flexible Payment</h3>
                  <p className="font-medium text-gray-700">Pay with Multiple Credit Card</p>
                </div>
            </li>
        </ul>
    </div>
  )
}
