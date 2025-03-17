import React from "react";
import banner from "../assets/banner.jpeg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) {
        controls.start({
          rotateX: 0,
          translateZ: 0,
          transition: { duration: 0.2, ease: "easeOut" }, // Smoother transition
        });
      } else {
        controls.start({
          rotateX: 15,
          translateZ: -30, // Slight inward effect
          transition: { duration: 0.2, ease: "easeOut" }, // Smooth effect
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="pt-40 pb-20 px-4 min-w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <button className="bg-black text-white hover:bg-gray-800 w-36 h-10 rounded-sm cursor-pointer">
              Get Started
            </button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <button className="bg-white border hover:bg-gray-100 border-gray-300 text-black w-36 h-10 rounded-sm cursor-pointer">
              Watch Demo
            </button>
          </Link>
        </div>
        <div className="perspective-[1200px] mt-10 overflow-hidden">
          <motion.div
            animate={controls}
            initial={{ rotateX: 15, translateZ: -30 }}
            className="rounded-lg shadow-2xl border mx-auto"
          >
            <img
              src={banner}
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
