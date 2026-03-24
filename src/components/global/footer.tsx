import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="text-xs uppercase tracking-[0.3em] text-white/70">
          © 2024. All Rights Reserved
        </div>
        <div className="text-sm text-white/70">by Sulthoni Akbar</div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/SulthoniAkbar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white p-2 rounded-full hover:bg-[#0f766e] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-sulthoni-akbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white p-2 rounded-full hover:bg-[#0f766e] transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/muhammadsultoni71/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 text-white p-2 rounded-full hover:bg-[#0f766e] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
