import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

// ─── EmailJS config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [phone,   setPhone]   = useState("");
  const [message, setMessage] = useState("");
  const [loader,  setLoader]  = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, phone, message },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error(`Failed to send message: ${err?.text || err?.message || "Unknown error"}`);
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
        <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Contact me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Got any questions about the product or scaling on our platform? We are here to help.
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="your-email@gmail.com"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  value={phone}
                  placeholder="+1 (555) 000-0000"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  placeholder="Leave us a message..."
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-y"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loader}
                className="w-full rounded-xl bg-gray-900 text-white py-3 font-semibold shadow-lg shadow-gray-900/15 hover:translate-y-[-1px] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loader ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          <aside className="lg:pl-6">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Chat with me</h3>
                <p className="mt-1 text-sm text-gray-600">Speak to me via live chat.</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <div className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline">
                      <FiMail /> studio@shotbymoire.com
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900">Call me</h3>
                <p className="mt-1 text-sm text-gray-600">Call me anytime</p>
                <a
                  href="tel:+12064763228"
                  className="mt-4 inline-flex items-center gap-2 text-gray-900 font-medium hover:underline"
                >
                  <FiPhone /> +1 (206) 476-3228
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
