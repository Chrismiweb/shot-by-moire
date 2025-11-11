import React, { useState } from "react";
import { FiMessageCircle, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

export default function ContactSection() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");     
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [loader, setLoader] = useState(false);


async function handleSubmit(e) {
  e.preventDefault();
  setLoader(true);

  const baseurl = "https://forms-io.onrender.com/submit-form/a7a67a26-6f8e-4b8f-bb7f-5508586ebad2";

  try {
    // Build a FormData payload like a real form post
    const fd = new FormData();
    fd.append("fullName", name);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("message", message);

    // console.log("Submitting to:", baseurl);
    // console.log({ name, email, phone, message });

    // IMPORTANT: use window.fetch to bypass any shadowed fetch wrappers
    const res = await window.fetch(baseurl, {
      method: "POST",
      body: fd,                 // no headers: browser sets correct multipart/form-data boundary
    });

    const data = await res.json().catch(() => ({}));
    if (data?.status === true) {
      toast.success("Message sent successfully!");
      // optional reset
      // setName(""); setEmail(""); setPhone(""); setMessage("");
    } else {
      throw new Error(data?.message || `HTTP ${res.status}`);
    }
  } catch (err) {
    console.error(err);
    toast.error(`Failed to send message: ${err.message}`);
  } finally {
    setLoader(false);
  }
}


  return (
    <section className="relative">
      <ToastContainer />
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
                    name="name"
                    value={name}
                    placeholder="Your name"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                    onChange = {(e)=>setName(e.target.value)}
                  />
                </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                    name="email"
                  placeholder="email@gmail.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  onChange = {(e)=>setEmail(e.target.value)}

                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1 grid grid-cols-[110px,1fr] gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                    onChange = {(e)=>setPhone(e.target.value)}

                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Leave us a message..."
                  name="message"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-y"
                  onChange = {(e)=>setMessage(e.target.value)}

                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 text-white py-3 font-semibold shadow-lg shadow-gray-900/15 hover:translate-y-[-1px] transition"
              >
                {loader ? "Sending..." : "Send message"}
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
                  {/* <li>
                    <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FiMessageCircle /> Start a live chat
                    </a>
                  </li> */}
                  <li>
                    <div className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FiMail /> shotbymoire@gmail.com
                    </div>
                  </li>
                  {/* <li>
                    <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FaXTwitter /> Message us on X
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* Call us */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Call me</h3>
                <p className="mt-1 text-sm text-gray-600">Call me anytime</p>
                <a href="tel:+15550000000" className="mt-4 inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                  <FiPhone /> +1 (206) 476-3228
                </a>
              </div>

              {/* Visit us */}
              {/* <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Visit us</h3>
                <p className="mt-1 text-sm text-gray-600">Chat to us in person at our Melbourne HQ.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                  <FiMapPin /> 100 Smith Street, Collingwood VIC 3066
                </a>
              </div> */}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
