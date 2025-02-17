import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
        <div data-aos="fade-left" className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out to us anytime!</p>

        <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>Momenelshemy1@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
            <FaPhone className="text-green-500 text-xl" />
            <span>+20 11 321 8977</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>123 Street, Aswan, Egypt</span>
            </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer">
            Send a Message
        </button>
        </div>
    </section>
  );
}
