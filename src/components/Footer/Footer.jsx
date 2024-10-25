import FooterLogo from "../../assets/logo-footer.png";

function Footer() {
  return (
    <div className="bg-[#06091a] text-white  flex flex-col justify-center items-center">
      <div className="mt-52">
        <img src={FooterLogo} alt="BpL" />
      </div>
      <div className="container mx-auto mt-16 px-5 lg:px-0 grid grid-cols-1  lg:grid-cols-3">
        <div className="">
          <h1 className="font-bold text-xl mb-4">About Us</h1>
          <p className="w-2/3 text-gray-500">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="">
          <h1 className="font-bold text-xl mb-4">Quick Links</h1>
          <ul className="list-disc pl-6  text-gray-500">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-bold text-xl mb-4">Subscribe</h1>
          <p className="text-gray-500">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered text-gray-500"
            />
            <button className="btn bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 w-full mt-11 py-8">
        <p className="text-center text-gray-500">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
