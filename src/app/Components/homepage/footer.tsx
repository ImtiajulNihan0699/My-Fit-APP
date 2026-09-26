import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#090A0C] border-t border-gray-800">
      <div className="container mx-auto w-full px-6 py-7 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG"
            width={10}
            height={10}
          />

          <span className="text-white text-[9px] font-bold">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-[8px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;