import React from "react";
import banner from "../assets/banner.jpeg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Button } from "./ui/button";

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
          <Link to="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-black text-white hover:bg-gray-800"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="perspective-[1200px] mt-10 overflow-hidden">
          <motion.div
            animate={controls}
            initial={{ rotateX: 15, translateZ: -30 }}
            className="rounded-lg shadow-2xl w-full max-w-[1280px] border mx-auto"
          >
            <img
              src={banner}
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
