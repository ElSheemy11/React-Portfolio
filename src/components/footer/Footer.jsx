import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer data-aos="fade" className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold">&copy; 2025 Momen ElSheemy. All rights reserved.</p>
        <p className="text-gray-400 text-sm mt-2">Built by ElSheemy</p>
        
        <div className="flex gap-6 mt-4">
            <a data-aos="fade-right" href="https://github.com/ElSheemy11" className="text-gray-400 hover:text-gray-200 transition text-2xl p-4 z">
             <FaGithub className="text-white" />
            </a>
            <a data-aos="fade" data-aos-delay="300" href="https://www.linkedin.com/in/momen-el-sheemy-8a5506247" className="text-gray-400 hover:text-blue-500 transition text-2xl p-4" >
             <FaLinkedin className="text-white" />
            </a>
            <a data-aos="fade-left" data-aos-delay="600" href="https://www.facebook.com/profile.php?id=100007460910946" className="text-gray-400 hover:text-blue-300 transition text-2xl p-4">
             <FaFacebook className="text-white" />
            </a>

        </div>
      </div>
    </footer>
  );
}
