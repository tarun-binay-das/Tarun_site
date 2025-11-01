"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function BackgroundRipple({
  cellSize = 56,
}: {
  cellSize?: number;
}) {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(
    null
  );
  const [rippleKey, setRippleKey] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Dynamically adjust grid size to viewport
  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setGridSize({
        cols: Math.ceil(w / cellSize),
        rows: Math.ceil(h / cellSize),
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [cellSize]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden pointer-events-auto",
        "bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.015)_60%,_transparent_100%)]",
        "[--cell-border:rgba(255,255,255,0.07)] [--cell-fill:rgba(255,255,255,0.015)]"
      )}
    >
      <GridRipple
        key={rippleKey}
        rows={gridSize.rows}
        cols={gridSize.cols}
        cellSize={cellSize}
        borderColor="var(--cell-border)"
        fillColor="var(--cell-fill)"
        clickedCell={clickedCell}
        onCellClick={(r, c) => {
          setClickedCell({ row: r, col: c });
          setRippleKey((k) => k + 1);
        }}
      />
    </div>
  );
}

type GridRippleProps = {
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
};

function GridRipple({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick = () => {},
}: GridRippleProps) {
  const [hoverCell, setHoverCell] = useState<{ row: number; col: number } | null>(
    null
  );

  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, i) => i), [rows, cols]);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="absolute inset-0 z-[1]" style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;

        const delay = clickedCell ? distance * 45 : 0; // ms
        const duration = 600 + distance * 70; // ms

        const style: React.CSSProperties = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            } as React.CSSProperties
          : {};

        // Is this cell being hovered?
        const isHovered =
          hoverCell?.row === rowIdx && hoverCell?.col === colIdx;

        return (
          <div
            key={idx}
            className={cn(
              "border-[0.5px] transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform",
              "bg-[var(--cell-fill)] border-[var(--cell-border)]",
              "opacity-[0.4]",
              isHovered && "bg-[rgba(255,255,255,0.1)] opacity-80 shadow-[0_0_8px_rgba(255,255,255,0.15)_inset]",
              clickedCell && "animate-cell-ripple"
            )}
            style={style}
            onClick={() => onCellClick(rowIdx, colIdx)}
            onMouseEnter={() => setHoverCell({ row: rowIdx, col: colIdx })}
            onMouseLeave={() => setHoverCell(null)}
          />
        );
      })}
    </div>
  );
}
