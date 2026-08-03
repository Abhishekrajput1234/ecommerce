export default function Contact(){
    return(<>

  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <img
        src="/public/image/contact-background.jpg"
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50">

    </div>

 

    {/* Content */}
    <div className="relative z-10 text-center text-white px-5">

        <p className="uppercase tracking-[4px] text-xl  text-orange-400 font-bold mb-4">
            Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-5">
            We're Here To Help
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-8">
            Whether you have questions about your order, shipping,
            returns, or products, our support team is always ready to
            assist you.
        </p>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-3 rounded-full font-semibold">
            Get In Touch
        </button>

    </div>

</section>

    
    </>)
}