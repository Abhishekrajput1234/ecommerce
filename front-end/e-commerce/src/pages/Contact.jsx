import { useState } from "react";
import axios from "axios";
import contactBackground from "../images/contact-background.jpg";
import {
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock
} from "react-icons/fa6";
export default function Contact(){

    const [contactForm, setContactForm] = useState({

        username:"",
        email:"",
        phone:"",
        subject:"",
        message:""

    })

    const handleChange = (e) => {
        setContactForm({...contactForm, [e.target.name]: e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:2000/contact", contactForm)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        console.log(contactForm);
        alert(" message  submitted successfully!")
    }

    const faqData = [

    {
        question: "How can I track my order?",
        answer:
            "After placing an order, go to My Orders and click Track Order to see the latest shipping status."
    },

    {
        question: "What is your return policy?",
        answer:
            "You can return eligible products within 7 days of delivery."
    },

    {
        question: "Which payment methods do you accept?",
        answer:
            "We accept UPI, Debit Card, Credit Card, Net Banking and Cash on Delivery."
    },

    {
        question: "How long does delivery take?",
        answer:
            "Orders are usually delivered within 3–7 business days."
    },

    {
        question: "How can I contact customer support?",
        answer:
            "You can contact us using the contact form, email or phone number listed above."
    }

];

const toggleFAQ = (index) => {

    if (activeIndex === index) {

        setActiveIndex(null);

    } else {

        setActiveIndex(index);

    }

};



const [activeIndex, setActiveIndex] = useState(null);



    return(<>

  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <img
        src={contactBackground}
        alt="Contact Banner"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50">

    </div>

 

    {/* Content */}
    <div className="relative z-10 text-center text-white px-5">

        <p className="uppercase tracking-[4px] text-2xl  text-orange-400 font-bold mb-3">
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

<div className="max-w-7xl mx-auto px-3 py-12">

    <p className="text-4xl capitalize font-bold text-orange-600 mt-8 text-center">get in touch with us</p>

    <p className="text-center text-xl text-gray-700 mt-3">
    We're always ready to answer your questions and help with your orders.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-9 gap-8 mt-6  ">

<div className="bg-white shadow-lg rounded-lg text-center p-8 border border-gray-100 ">

     <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaLocationDot className="text-3xl text-orange-500" />
    </div>


<h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">
    our office
</h2>

<p className="text-gray-600 leading-7">
        123, Connaught Place <br />
        New Delhi, Delhi - 110001 <br />
        India
    </p>

   <div className="w-46 h-1 bg-orange-500 mx-auto rounded-full my-6"></div>

 <p className="text-gray-600 text-sm  leading-6">
        Visit our office during business hours. We'd be happy to assist you in person.
    </p>


</div>

<div className="bg-white shadow-md rounded-lg text-center p-8 border border-gray-100 ">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaPhone className="text-3xl text-orange-500" />
    </div>


    <h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">
        phone cards
    </h2>

    
          <p className="text-gray-600 leading-7">
        +91 98765 43210 <br />
        +91 91234 56789
    </p>

     <div className="w-46 h-1 bg-orange-500 mx-auto rounded-full my-6"></div>

      <p className="text-gray-500 text-sm leading-6">
        Our customer support team is available Monday to Saturday from
        <span className="font-semibold text-gray-700"> 9:00 AM to 7:00 PM</span>.
        Feel free to call us for product inquiries, order tracking, returns, or any assistance.
    </p>

    
</div>


<div className="bg-white shadow-md rounded-lg text-center p-8 border border-gray-100 ">

        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaEnvelope className="text-3xl text-orange-500" />
    </div>



    <h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">
        email us 
    </h2>

    
          <p className="text-gray-600 leading-7">
        support@shopkart.com <br />
        sales@shopkart.com
    </p>

     <div className="w-46 h-1 bg-orange-500 mx-auto rounded-full my-6"></div>

      <p className="text-gray-500 text-sm leading-6">
        Have a question or need assistance? Send us an email anytime, and our
        support team will respond within
        <span className="font-semibold text-gray-700"> 24 hours</span>.
    </p>

    
</div>


<div className="bg-white shadow-md rounded-lg text-center p-8 border border-gray-100 ">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaClock className="text-3xl text-orange-500" />
    </div>


    <h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">
        Business Hours
    </h2>

    
   <div className="text-gray-600 leading-7">

        <p>
            <span className="font-semibold text-gray-800">
                Monday - Friday
            </span>
            <br />
            9:00 AM - 7:00 PM
        </p>

       

    </div>

    

     <div className="w-46 h-1 bg-orange-500 mx-auto rounded-full my-6"></div>

      <p className="text-gray-500 text-sm leading-6">
        Our support team is available during business hours to assist with
        orders, returns, payments, and product inquiries. We strive to respond
        to every request as quickly as possible.
    </p>

    
</div>

</div>


</div>



{/* contact form ...........*/}

<div className=" bg-gray-50 px-8 py-6 rounded-lg ">

     <p className="text-orange-500 text-4xl mb-16 font-bold uppercase tracking-widest text-center">
                Contact Us
 </p>

<div className=" max-w-7xl mx-auto grid lg:grid-cols-2 gap-18 items-start justify-center">
<div>

  <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
                Let's Start A Conversation
</h2>

 <p className="text-gray-600 mt-6 leading-8 text-lg">
                Have questions about your order, shipping, returns, or
                products? Our dedicated support team is always ready to
                help you with quick and reliable assistance.
 </p>

 {/*features*/}

 <div className="space-y-4 mt-10">
    <div className="flex items-center gap-4">

 <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        ✓
 </div>


   <div>
       <h4 className="font-semibold text-lg">
              Fast Response
  </h4>

       <p className="text-gray-500">
          We usually reply within 24 hours.
              </p>
      </div>


    </div>
 </div>

    <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        ✓
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">
                            Secure Communication
                        </h4>

                        <p className="text-gray-500">
                            Your information is always safe with us.
                        </p>
                    </div>
                </div>

            </div>


  {/*Right side*/}        



    <div  className="bg-white shadow-lg rounded-lg p-10 border border-gray-100">

   <h3 className=" text-gray-700 font-bold capitalize text-center  text-2xl mb-6">
    send us a message 
   </h3>

   <form onSubmit={submitHandler}>

    <div className="">

   <input type="text"
   placeholder="Your Name"
   name="username"
   value={contactForm.username}
   onChange={handleChange}

   className="border w-full p-2 border-gray-400 rounded-lg outline-none focus:border-orange-500 mb-5"
   />

   <input type="text"
   placeholder="enter email"
   name="email"
   value={contactForm.email}
    onChange={handleChange}
   
   className="border w-full p-2 border-gray-400 rounded-lg outline-none focus:border-orange-500 mb-5"
   />

    <input type="text"
   placeholder="phone number"
    name="phone"
    value={contactForm.phone}
     onChange={handleChange}
   className="border w-full p-2 border-gray-400 rounded-lg outline-none focus:border-orange-500 mb-5"
   />

    <input type="text"
   placeholder="subject"
   name="subject"
    value={contactForm.subject}
     onChange={handleChange}
   className="border w-full p-2 border-gray-400 rounded-lg outline-none focus:border-orange-500 mb-5"
   />


      <textarea
    rows="3"
      placeholder="Write your message..."
      value={contactForm.message}
      name="message"
       onChange={handleChange}
     className="w-full border border-gray-400 rounded-xl px-5 py-4 mt-3 outline-none focus:border-orange-500 resize-none"
      ></textarea>

       <button
                    className="mt-6 bg-orange-500 hover:bg-orange-600 duration-300 text-white px-8 py-2 rounded-xl font-semibold w-full"
                >
                    Send Message
                </button>
                </div>

   </form>


    </div>  




        </div>
</div>



<section className="bg-white py-20">

    <div className="max-w-5xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center text-gray-800">
            Frequently Asked Questions
        </h2>

        <p className="text-gray-500 text-center mt-4">
            Find answers to the most common questions.
        </p>

        <div className="mt-12 space-y-5">

            {faqData.map((item, index) => (

                <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >

                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-6 bg-white hover:bg-orange-50 duration-300"
                    >

                        <h3 className="text-lg font-semibold text-left">
                            {item.question}
                        </h3>

                        <span className="text-2xl text-orange-500">
                            {activeIndex === index ? "-" : "+"}
                        </span>

                    </button>

                    {activeIndex === index && (

                        <div className="px-6 pb-6 text-gray-600 leading-7">

                            {item.answer}

                        </div>

                    )}

                </div>

            ))}

        </div>

    </div>

</section>





    
    </>)
}