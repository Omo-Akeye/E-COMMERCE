

export default function Footer() {
  return (
    <footer className="bg-heavy-black text-light-gray text-sm">
       <div className="flex w-[80%] justify-between m-auto">
       <section>
            <h2>logo.</h2>
            <p>'Fashion: Where self-expression meets creativity, embracing diversity and individuality</p>
            <ul className="flex gap-2">
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-x-twitter"></i></li>
            </ul>
        </section>

        <section>
            <h2>About Us</h2>
            <ul>
                <li>Our story</li>
                <li>Factories</li>
                <li>Contact</li>
                <li>Help and Advices</li>
                <li>Refund Policy</li>
            </ul>
        </section>

        <section>
            <h2>Information</h2>
            <ul>
                <li>Delivery Information</li>
                <li>Privacy and policy</li>
                <li>Terms of use</li>
            </ul>
        </section>

        <section>
            <h2>Category</h2>
            <ul>
                <li>New Arrivals</li>
                <li>Men</li>
                <li>Women</li>
                <li>Shoes</li>
                <li>Luxury Attire</li>
                <li>Kids</li>
                <li>Accessories</li>
            </ul>
        </section>

        <section>
            <h2>Contact Us</h2>
            <ul>
                <li>kinmikna@gmail.com</li>
                <li>+1 2344 58987694</li>
            </ul>
        </section>
       </div>
    </footer>
  )
}
