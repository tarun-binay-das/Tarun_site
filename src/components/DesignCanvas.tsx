// src/components/DesignCanvas.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * DesignCanvas
 * - Wrap your fixed-layout hero (1920x1080) inside this component
 * - It centers the canvas and scales it uniformly to fit the viewport
 * - Keeps all inside px positions unchanged
 *
 * Usage:
 * <DesignCanvas width={1920} height={1080}>
 *   { /* your exact hero markup (unchanged) * / }
 * </DesignCanvas>
 */

export default function DesignCanvas({
  children,
  width = 1920,
  height = 1080,
  maxScale = 1,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
  maxScale?: number; // don't scale above this (1 keeps original size max)
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    let raf: number | null = null;
    function compute() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // compute uniform scale so the whole canvas fits
      const scaleW = vw / width;
      const scaleH = vh / height;
      const newScale = Math.min(scaleW, scaleH, maxScale);

      setScale(newScale);
    }

    function onResize() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        compute();
      });
    }

    compute();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [width, height, maxScale]);

  // positioning: center in viewport and scale from center
  const wrapperStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${width}px`,
    height: `${height}px`,
    transformOrigin: "center center",
    transform: `translate(-50%, -50%) scale(${scale})`,
    pointerEvents: "auto",
    overflow: "visible",
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <div ref={ref} style={wrapperStyle} aria-hidden={false}>
        {children}
      </div>
    </div>
  );
}
