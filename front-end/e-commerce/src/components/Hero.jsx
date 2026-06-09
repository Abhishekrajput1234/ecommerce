import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-50 to-pink-50 min-h-[80vh] flex items-center">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center mt-8 px-6 py-12">

        {/* Left Content */}

        <div>

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            🔥 New Arrival 2026 Collection
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            Discover The Latest Fashion For
            <span className="text-blue-600"> Men & Women</span>
          </h1>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Explore premium clothing, footwear, accessories, and grocery
            products at unbeatable prices with fast delivery and secure
            payments.
          </p>

          <div className="flex gap-4 mt-8">

            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Shop Now
            </button>

            <button
              onClick={() => navigate("/register")}
              className="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore More
            </button>

          </div>

          {/* Stats */}

          <div className="flex gap-8 mt-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">10K+</h2>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">500+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">24/7</h2>
              <p className="text-gray-500">Support</p>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="flex justify-center">

          <img
            src="/image/pic1.webp"
            alt="Fashion Collection"
            className="max-h-[650px] w-full object-contain drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}