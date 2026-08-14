export default function About(){
    return(<>

{/* About Hero Section */}

<section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">

    <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            {/* Left Content */}

            <div className="text-white">

                <p className="text-lg font-semibold mb-3">
                    🛍️ Welcome to Our Store
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    We Make Shopping
                    <br />
                    Simple & Enjoyable
                </h1>

                <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
                    We are an online shopping platform dedicated to providing
                    high-quality products at affordable prices. From fashion
                    and electronics to everyday essentials, we bring everything
                    you need to your doorstep.
                </p>

                <button
                    className="mt-8 bg-white text-orange-600 px-8 py-3
                    rounded-full font-semibold hover:bg-gray-100
                    transition duration-300 cursor-pointer"
                >
                    Explore Products
                </button>

            </div>


            {/* Right Image */}

            <div className="flex justify-center">

                <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
                    alt="Online Shopping"
                    className="w-full max-w-xl h-80 md:h-96
                    object-cover rounded-2xl shadow-2xl"
                />

            </div>

        </div>

    </div>

</section>



{/* Who We Are Section */}

<section className="bg-gray-50 py-16">

    <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            {/* Left Image */}

            <div className="relative">

                <img
                    src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
                    alt="Our Store"
                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
                />

                {/* Experience Badge */}

                <div className="absolute -bottom-6 -right-4 md:right-6
                                bg-orange-500 text-white rounded-xl
                                px-6 py-4 shadow-lg">

                    <p className="text-3xl font-bold">
                        100%
                    </p>

                    <p className="text-sm">
                        Customer Focused
                    </p>

                </div>

            </div>


            {/* Right Content */}

            <div>

                <p className="text-orange-600 font-semibold text-lg">
                    WHO WE ARE
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
                    Your Trusted
                    <span className="text-red-600"> Online Store</span>
                </h2>

                <p className="text-gray-600 mt-6 leading-relaxed">
                    We are a modern e-commerce platform created to make online
                    shopping simple, convenient, and enjoyable. Our goal is to
                    provide customers with quality products at competitive
                    prices while delivering a smooth and reliable shopping
                    experience.
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                    From fashion and electronics to everyday essentials, we
                    carefully bring together products that meet the needs of
                    our customers. We focus on quality, convenience, secure
                    shopping, and excellent customer service.
                </p>


                {/* Highlights */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                    <div className="flex items-start gap-3">

                        <div className="bg-orange-100 text-orange-600
                                        w-11 h-11 rounded-full flex
                                        items-center justify-center text-xl">
                            ✓
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800">
                                Quality Products
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Products selected with customer needs in mind.
                            </p>
                        </div>

                    </div>


                    <div className="flex items-start gap-3">

                        <div className="bg-red-100 text-red-600
                                        w-11 h-11 rounded-full flex
                                        items-center justify-center text-xl">
                            ♥
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800">
                                Customer First
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Your satisfaction is our top priority.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>




{/* Our Values Section */}

<section className="bg-white py-16">

    <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center max-w-2xl mx-auto">

            <p className="text-orange-600 font-semibold text-lg">
                WHAT WE BELIEVE IN
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
                Our Core <span className="text-red-600">Values</span>
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed">
                Our values guide everything we do and help us create a
                shopping experience that our customers can trust.
            </p>

        </div>


        {/* Values Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* Customer First */}

            <div className="group bg-gray-50 rounded-2xl p-7 text-center
                            border border-gray-100
                            hover:bg-orange-500 hover:text-white
                            hover:-translate-y-2 hover:shadow-xl
                            transition-all duration-300">

                <div className="w-16 h-16 mx-auto rounded-full
                                bg-orange-100 text-orange-600
                                group-hover:bg-white group-hover:text-orange-600
                                flex items-center justify-center text-3xl
                                transition duration-300">
                    ❤️
                </div>

                <h3 className="text-xl font-bold text-gray-800
                               group-hover:text-white mt-5">
                    Customer First
                </h3>

                <p className="text-gray-500 group-hover:text-white/90
                              mt-3 leading-relaxed">
                    We put our customers at the center of everything we do
                    and work to provide a simple and satisfying experience.
                </p>

            </div>


            {/* Quality */}

            <div className="group bg-gray-50 rounded-2xl p-7 text-center
                            border border-gray-100
                            hover:bg-red-500 hover:text-white
                            hover:-translate-y-2 hover:shadow-xl
                            transition-all duration-300">

                <div className="w-16 h-16 mx-auto rounded-full
                                bg-red-100 text-red-600
                                group-hover:bg-white group-hover:text-red-600
                                flex items-center justify-center text-3xl
                                transition duration-300">
                    ⭐
                </div>

                <h3 className="text-xl font-bold text-gray-800
                               group-hover:text-white mt-5">
                    Quality
                </h3>

                <p className="text-gray-500 group-hover:text-white/90
                              mt-3 leading-relaxed">
                    We focus on offering reliable and quality products that
                    provide real value to our customers.
                </p>

            </div>


            {/* Trust */}

            <div className="group bg-gray-50 rounded-2xl p-7 text-center
                            border border-gray-100
                            hover:bg-orange-500 hover:text-white
                            hover:-translate-y-2 hover:shadow-xl
                            transition-all duration-300">

                <div className="w-16 h-16 mx-auto rounded-full
                                bg-orange-100 text-orange-600
                                group-hover:bg-white group-hover:text-orange-600
                                flex items-center justify-center text-3xl
                                transition duration-300">
                    🛡️
                </div>

                <h3 className="text-xl font-bold text-gray-800
                               group-hover:text-white mt-5">
                    Trust
                </h3>

                <p className="text-gray-500 group-hover:text-white/90
                              mt-3 leading-relaxed">
                    We believe in honest communication, secure shopping,
                    and building long-lasting relationships with customers.
                </p>

            </div>


            {/* Innovation */}

            <div className="group bg-gray-50 rounded-2xl p-7 text-center
                            border border-gray-100
                            hover:bg-red-500 hover:text-white
                            hover:-translate-y-2 hover:shadow-xl
                            transition-all duration-300">

                <div className="w-16 h-16 mx-auto rounded-full
                                bg-red-100 text-red-600
                                group-hover:bg-white group-hover:text-red-600
                                flex items-center justify-center text-3xl
                                transition duration-300">
                    💡
                </div>

                <h3 className="text-xl font-bold text-gray-800
                               group-hover:text-white mt-5">
                    Innovation
                </h3>

                <p className="text-gray-500 group-hover:text-white/90
                              mt-3 leading-relaxed">
                    We continuously improve our platform and use technology
                    to make online shopping easier and more convenient.
                </p>

            </div>

        </div>

    </div>

</section>


{/* Statistics Section */}

<section className="bg-gray-100 py-16">

    <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-gray-800">
                Our Achievements
            </h2>

            <p className="text-gray-500 mt-3">
                Growing every day with the trust and support of our customers.
            </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Customers */}

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">

                <div className="text-4xl mb-3">
                    👥
                </div>

                <h3 className="text-4xl font-bold text-orange-500">
                    10K+
                </h3>

                <p className="text-gray-600 font-semibold mt-2">
                    Happy Customers
                </p>

            </div>


            {/* Products */}

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">

                <div className="text-4xl mb-3">
                    🛍️
                </div>

                <h3 className="text-4xl font-bold text-orange-500">
                    500+
                </h3>

                <p className="text-gray-600 font-semibold mt-2">
                    Products
                </p>

            </div>


            {/* Orders */}

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">

                <div className="text-4xl mb-3">
                    📦
                </div>

                <h3 className="text-4xl font-bold text-orange-500">
                    15K+
                </h3>

                <p className="text-gray-600 font-semibold mt-2">
                    Orders Delivered
                </p>

            </div>


            {/* Support */}

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">

                <div className="text-4xl mb-3">
                    🎧
                </div>

                <h3 className="text-4xl font-bold text-orange-500">
                    24/7
                </h3>

                <p className="text-gray-600 font-semibold mt-2">
                    Customer Support
                </p>

            </div>

        </div>

    </div>

</section>







    
    </>)
}