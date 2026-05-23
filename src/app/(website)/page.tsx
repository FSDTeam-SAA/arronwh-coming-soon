"use client";

import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className="min-h-screen bg_color flex flex-col items-center justify-center relative overflow-hidden px-6 py-12 md:py-20 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] md:w-[40%] md:h-[40%] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] md:w-[40%] md:h-[40%] bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12 animate-fadeIn">
        
        {/* Logo */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-[220px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[480px] mx-auto">
          <Image 
            src="/logo.webp" 
            alt="Logo" 
            width={520} 
            height={520} 
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-primary/50 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-75 bg-white/50 backdrop-blur-sm">
          <Star className="w-3 h-3 md:w-4 md:h-4 text-primary-darker fill-primary-darker" />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#2D3D4D] tracking-wider uppercase">Launching Soon</span>
          <Star className="w-3 h-3 md:w-4 md:h-4 text-primary-darker fill-primary-darker" />
        </div>

        {/* Main Content */}
        <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black text-[#2D3D4D] leading-[1.1] tracking-tighter uppercase px-2">
            Coming <span className="text-primary-darker drop-shadow-md">soon...</span>
          </h1>
          <p className="desc max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-[#2D3D4D]/80 leading-relaxed mt-4 md:mt-6">
            We&apos;re working hard to bring you a brand new experience. Built for the next generation.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
          <Link
            target="_blank"
            href="https://www.facebook.com/Yoloheat"
            className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary text-[#334155] transition-transform hover:-translate-y-1 shadow-lg"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Link> 

          <Link
            target="_blank"
            href="https://www.instagram.com/yolo.heat"
            className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary text-[#334155] transition-transform hover:-translate-y-1 shadow-lg"
            aria-label="Instagram"
          >
            <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Link>
        </div>

        {/* Italic text */}
        <div className="mt-6 md:mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <p className="text-[#2D3D4D]/70 italic text-sm sm:text-base md:text-lg">Be prepared for the revolution.</p>
        </div>
        
        {/* Footer / Social Links */}
        <div className="mt-12 md:mt-16 text-[10px] sm:text-xs md:text-sm text-[#2D3D4D]/50 animate-in fade-in duration-700 delay-700 fill-mode-both">
          © {new Date().getFullYear()} Arronwh. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
