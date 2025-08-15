// import React from 'react'
// import { FormEvent, useState } from "react"
// // import Link from "next/link"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function Contact(){
//     const [email, setEmail] = useState("");
//     const [fullName, setFullName] = useState("")
//     const [message, setMessage] = useState("")
//     const [sending, setIsSending] = useState(false)

//     async function fetchApi(e){
//         if(!email || !fullName || !message){
//            return toast.warn("Please fill all credentials")
//         }
//         setIsSending(true)

//         e.preventDefault()
//         try {
//             // const baseUrl = "https://forms-io.onrender.com/submit-form/31c6c5bc-6c57-4e93-b7f8-ef481b0dd41e"
//             const baseUrl = "https://forms-io.onrender.com/submit-form/c4d95fa1-3184-4ec1-af18-122cdc2c21af"

//             const response = await fetch(baseUrl,{
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body : JSON.stringify({email, fullName, message})
//             })
//             .then((res)=>res.json())
//             if(response){
//                 toast.success("Your message have been sent successful")
//                 setIsSending(false)
//             }
//         } catch (error) {
//             // toast.console.error();
//             toast.error("your message was not sent, please try again later")
            
//         }
//     }
//     return(
//     <div className="w-[100%] bg-white flex-col gap-[50px] py-[50px] flex justify-center items-center">
//          <div className="md:w-[80%] w-[90%] rounded-lg bg-black py-[20px] px-[30px]">
//             <h1 className="text-white font-bold">FILL THE FORM BELOW</h1>
//         </div>    
//         <ToastContainer/>
//         <form 
//         // action ="https://forms-io.onrender.com/submit-form/31c6c5bc-6c57-4e93-b7f8-ef481b0dd41e"
//         // method="POST"
//         className="md:w-[80%] w-[100%] px-[30px] flex flex-col gap-[25px]">
//             <div className="lg:w-[70%] w-[100%] flex flex-col gap-[10px]">
//                 <p className="font-medium text-black">FULL NAME</p>
//                 <input onChange={(e)=>setFullName(e.target.value)} required name="fullname" type="text" className="border w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
//             </div> 
//             <div className="lg:w-[70%] w-[100%] flex flex-col gap-[10px]">
//                 <p className="font-medium text-black">EMAIL</p>
//                 <input onChange={(e)=>setEmail(e.target.value)} required name="email" type="email" className="border w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
//             </div>     
//             <div className="lg:w-[70%] w-[100%] flex flex-col gap-[10px]">
//                 <p className="font-medium text-black">TYPE YOUR MESSAGE</p>
//                 <textarea onChange={(e)=>setMessage(e.target.value)} required name="email" className="border h-[200px] w-[100%] text-black bg-gray-200 py-[8px] border-[#F8E7F8] px-[10px] rounded-[10px]" />
//             </div>    
//             <button onClick={fetchApi} type="submit" className="bg-[#B87333] cursor-pointer transition-all duration-1000 hover:bg-[#d49633] w-[40%] lg:w-[15%] rounded-[10px] py-[12px] text-[white] font-semibold">{sending ? "Sending..." : "Send Now"}</button>                   
//         </form>
//         {/* <div className="w-[100%] gap-[20px] justify-center items-center flex flex-col py-[70px] md:px-[20px] border-t-2 border-[#F8E7F8]">
//             <h1 className="text-center text-[20px] font-bold text-[#FB9B02]">READ OUR FAQ</h1>
//             <p className="text-[#00000099] font-semibold text-center text-[14px] w-[80%] lg:w-[50%]">Curious about our services or have a quick question? Explore our FAQ to find solutions and valuable information. Let&apos;s get you started on the right path!</p>
//             <Link to = '/'>
//                 <button className=" px-[25px] bg-[#FB9B02] transition-all duration-1000 hover:bg-[#d49633] rounded-lg py-[10px] text-white font-semibold">Click Here</button>
//             </Link>
//         </div> */}
//     </div>
//     )
// }





import React from "react";
import { FiMessageCircle, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.03)_1px)] [background-size:22px_22px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Contact me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Got any questions about the product or scaling on our platform? We are here to help.
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </header>

        {/* Body */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Form card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1 grid grid-cols-[110px,1fr] gap-3">
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Leave us a message..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-y"
                />
              </div>


              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 text-white py-3 font-semibold shadow-lg shadow-gray-900/15 hover:translate-y-[-1px] transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: Contact options */}
          <aside className="lg:pl-6">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {/* Chat with us */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Chat with me</h3>
                <p className="mt-1 text-sm text-gray-600">Speak to me via live chat.</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FiMessageCircle /> Start a live chat
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FiMail /> Shoot us an email
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FaXTwitter /> Message us on X
                    </a>
                  </li>
                </ul>
              </div>

              {/* Call us */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Call me</h3>
                <p className="mt-1 text-sm text-gray-600">Call me anytime</p>
                <a href="tel:+15550000000" className="mt-4 inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                  <FiPhone /> +1 (555) 000-0000
                </a>
              </div>

              {/* Visit us */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Visit us</h3>
                <p className="mt-1 text-sm text-gray-600">Chat to us in person at our Melbourne HQ.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                  <FiMapPin /> 100 Smith Street, Collingwood VIC 3066
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
