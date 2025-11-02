"use client";

import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef } from "react";
import SpinningIcon from "../SpinningIcon";
import Button from "../Button";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth scroll-based rotation for spinning icon
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Reusable fade-in animation
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: cubicBezier(0.25, 1, 0.5, 1) },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col justify-center items-start min-h-screen overflow-hidden text-white px-12 md:px-24"
    >
      {/* === Background boxes behind the name === */}
      <div className="absolute left-[12%] top-20 -translate-y-1">
        <div className="absolute top-[250px] left-[70px] w-[700px] h-[300px] bg-[#1e1e1e]" />
        <div className="absolute top-[120px] left-[150px] w-[440px] h-[230px] bg-[#2b2b2b]" />
        <div className="absolute top-[20px] left-[-70px] w-[260px] h-[400px] bg-[#3b3b3b]" />
      </div>

      {/* === Main centered name === */}
      <motion.div
        {...fadeIn}
        className="relative flex flex-col justify-center mt-[-18rem]"
      >
        <h1 className="px-10 text-[10rem] font-extrabold uppercase leading-[1] tracking-tight">
          TARUN BINAY DAS
        </h1>

        {/* Subtitle lines (bigger + smoother animation) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: cubicBezier(0.25, 1, 0.5, 1),
          }}
          className="absolute top-[110px] left-[350px] mt-[90px] space-y-3 font-mono text-[1.1rem] md:text-[1.25rem] tracking-widest"
        >
          <p className="text-gray-300">/ WEB DEVELOPER</p>
          <p className="text-gray-300">/ GRAPHIC DESIGNER</p>
          <p className="text-gray-300">/ WEB DESIGNER ( UI/UX )</p>
        </motion.div>

        {/* Contact info (bigger + lower near bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: cubicBezier(0.25, 1, 0.5, 1),
          }}
          className="absolute bottom-[-150px] left-10 font-mono text-[1rem] md:text-[1.1rem] text-gray-300 leading-relaxed"
        >
          <p className="absolute right-[-400px] top-[180px] uppercase tracking-widest mb-2 text-gray-400">
            <Button  className="text-gray-300" text="AVAILABLE FOR COLLABORATION " href="#" initialRotation={90} hoverRotation={45} />
          </p>
          <p className="absolute right-[-430px] top-[210px] font-bold text-white text-[1rem] contact-glow cursor-pointer underline ">
            tarunbinaydas@gmail.com
          </p>
          
        </motion.div>
      </motion.div>

      {/* === Tagline on right (cursive, animated) === */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]),
          y: useTransform(scrollYProgress, [0, 1], [0, 50]),
        }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2"
      >
        <p className="absolute right-[-30px] top-[-320px] font-greatvibes text-[5rem] text-gray-100 tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] whitespace-nowrap">
          Designs that speak
        </p>

      </motion.div>

      {/* === Spinning SVG === */}
      <motion.div
        style={{ rotate }}
        className="absolute right-[30%] bottom-[30%] w-[150px] h-[150px] opacity-80"
      >
        <SpinningIcon />
      </motion.div>

      {/* === Side date label === */}
      <div className="absolute right-[1.5%] top-[550px] rotate-90 text-[1.3rem] tracking-[0.25em] text-gray-400">
        16012006
      </div>

      {/* === Bottom-right work info === */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: cubicBezier(0.25, 1, 0.5, 1),
        }}
        className="absolute right-[10%] bottom-[18.2%] text-sm text-gray-400 font-mono text-right"
      >
        <p className="absolute right-[0%] top-[-30px] uppercase tracking-widest mb-2 text-gray-400">
            <Button  className="text-gray-300" text="RECENT WORKS" href="#" initialRotation={90} hoverRotation={45}/>
          </p>
        <p className="font-bold text-white text-[1rem]">
          TRUETXT – <span className="text-gray-300">Messaging App</span>
        </p>
      </motion.div>
    </section>
  );
}
