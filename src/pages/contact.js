import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser"
import { useRef } from "react";

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_7gatocp', 'template_yjfxcaa', form.current, 'TCRSjkocg4515XReA')
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successful messaging!"
        })
      }, (error) => {
        alert(error.text)
      })
  }

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Afiocca. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <div className="min-h-screen p-4 mt-20">
        <TransitionEffect />
        <div className="max-w-2xl mx-auto shadow-lg p-5 rounded-lg border-t-4 border-zinc-400 bg-zinc-800">
          <h1 className="text-3xl font-semibold mb-4 text-center text-white">Get in touch</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                value="Send"
                className="px-6 py-3 text-white bg-cyan-600 font-bold rounded-md hover:bg-cyan-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
