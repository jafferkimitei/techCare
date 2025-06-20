
"use client";
import { FaCog, FaEllipsisV } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold">MediTrack</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {["Overview", "Patients", "Schedule", "Message", "Transactions"].map((item) => (
            <a href="#" key={item} className="hover:text-blue-600 transition">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/user-avatar.jpg"
            alt="User"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <div className="hidden md:block text-sm">
            <p className="font-medium">Dr. Alexa Grey</p>
            <p className="text-xs text-gray-500">Cardiologist</p>
          </div>
        </div>

        {/* Icons */}
        <button className="p-2 hover:bg-gray-100 rounded-full" title="Settings">
          <FaCog size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full" title="More options">
          <FaEllipsisV size={18} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
