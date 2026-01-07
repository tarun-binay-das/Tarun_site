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

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: cubicBezier(0.25, 1, 0.5, 1) },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col justify-center items-start min-h-screen overflow-visible text-white px-12 md:px-24 pointer-events-none"
    >
      {/* === Background boxes behind the name === */}
      <div className="absolute left-[12%] top-10 -translate-y-1">
        <div className="absolute top-[150px] left-[70px] w-[750px] h-[400px] bg-[#1e1e1e]" />
        <div className="absolute top-[20px] left-[150px] w-[440px] h-[230px] bg-[#2b2b2b]" />
        <div className="absolute top-[-30px] left-[-100px] w-[260px] h-[400px] bg-[#3b3b3b]" />
      </div>

      {/* === Main centered name === */}
      <motion.div
        {...fadeIn}
        className="relative flex flex-col justify-center mt-[-22rem]"
      >
        <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]),
          y: useTransform(scrollYProgress, [0, 1], [0, 50]),
        }}
        className="absolute right-[10%] top-[42%]"
      >
        <p className="absolute right-[-120px] top-[-170px] font-greatvibes text-[5rem] text-gray-100 tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] whitespace-nowrap">
          Designs that speak
        </p>
      </motion.div>
        <h1 className="px-12 text-[10rem] font-extrabold uppercase leading-[1] tracking-tight">
          TARUN BINAY DAS
        </h1>

        {/* Subtitle lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: cubicBezier(0.25, 1, 0.5, 1),
          }}
          className="absolute top-[140px] left-[350px] mt-[90px] space-y-3 font-mono text-[1.25rem] md:text-[1.9rem] tracking-widest"
        >
          <p className="text-gray-300">/ WEB DEVELOPER</p>
          <p className="text-gray-300">/ GRAPHIC DESIGNER</p>
          <p className="text-gray-300">/ WEB DESIGNER ( UI/UX )</p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: cubicBezier(0.25, 1, 0.5, 1),
          }}
          className="absolute bottom-[-280%] left-[-10%] font-mono text-[1.2rem] md:text-[1.3rem] text-gray-300 leading-relaxed space-y-3 pointer-events-auto"
        >
          <div className="uppercase tracking-widest text-gray-400 text-[1.1rem] font-semibold">
            available for collaboration
          </div>
          <Button
            className="text-white text-[1.35rem] md:text-[1.5rem] font-semibold"
            text="tarunbinaydas@gmail.com"
            href="mailto:tarunbinaydas@gmail.com"
            initialRotation={90}
            hoverRotation={45}
          />
        </motion.div>
      </motion.div>

     

      {/* === Spinning SVG === */}
      <motion.div
        style={{ rotate }}
        className="absolute right-[30%] bottom-[20%] w-[200px] h-[200px] opacity-100"
      >
        <SpinningIcon />
      </motion.div>

      {/* === Side date label === */}
      <div className="absolute right-[-80px] top-[350px] rotate-90 text-[2.5rem] tracking-[0.25em] text-gray-400">
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
        className="absolute right-[1%] bottom-[4%] text-gray-400 font-mono text-right pointer-events-auto"
      >
        <p className="absolute right-[0%] top-[-34px] uppercase tracking-widest mb-2 text-gray-400 text-[1.1rem] font-semibold">
          recent works
        </p>
        <Button
          className="text-white text-[1.3rem] md:text-[1.45rem] font-semibold"
          text="TRUETXT – Messaging App"
          href="#projects"
          initialRotation={90}
          hoverRotation={45}
        />
      </motion.div>
          
    </section>
  );
}
