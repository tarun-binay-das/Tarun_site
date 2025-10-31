"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

/**
 * Full Aceternity-like Interactive Background Grid
 * - Smooth ripple waves
 * - Hover-based glow field
 * - Multi-ripple support
 */
const BackgroundRipple: React.FC<{ cellSize?: number }> = ({ cellSize = 56 }) => {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [ripples, setRipples] = useState<{ row: number; col: number; id: number }[]>([]);
  const [hoverCell, setHoverCell] = useState<{ row: number; col: number } | null>(null);
  const rippleId = useRef(0);

  // Adjust grid dynamically to viewport
  useEffect(() => {
    const resizeGrid = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setGridSize({
        cols: Math.ceil(w / cellSize),
        rows: Math.ceil(h / cellSize),
      });
    };
    resizeGrid();
    window.addEventListener("resize", resizeGrid);
    return () => window.removeEventListener("resize", resizeGrid);
  }, [cellSize]);

  const handleClick = (row: number, col: number) => {
    const id = rippleId.current++;
    setRipples((prev) => [...prev, { row, col, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1500);
  };

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:rgba(255,255,255,0.07)] [--cell-fill-color:rgba(255,255,255,0.02)]"
      )}
    >
      {gridSize.rows > 0 && gridSize.cols > 0 && (
        <DivGrid
          rows={gridSize.rows}
          cols={gridSize.cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          ripples={ripples}
          hoverCell={hoverCell}
          onCellHover={setHoverCell}
          onCellClick={handleClick}
          interactive
        />
      )}
    </div>
  );
};

export default BackgroundRipple;

type DivGridProps = {
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  ripples: { row: number; col: number; id: number }[];
  hoverCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  onCellHover?: (hover: { row: number; col: number } | null) => void;
  interactive?: boolean;
};

const DivGrid: React.FC<DivGridProps> = ({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  ripples,
  hoverCell,
  onCellClick = () => {},
  onCellHover = () => {},
  interactive = true,
}) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, i) => i), [rows, cols]);

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="absolute inset-0" style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;

        const distanceFromHover =
          hoverCell !== null ? Math.hypot(hoverCell.row - rowIdx, hoverCell.col - colIdx) : 999;

        // glow near cursor
        const hoverIntensity = Math.max(0, 1 - distanceFromHover / 6);
        const hoverOpacity = hoverIntensity * 0.25;

        const isClicked =
          ripples.findIndex((r) => r.row === rowIdx && r.col === colIdx) !== -1;

        const style: React.CSSProperties = {
          backgroundColor: fillColor,
          borderColor,
          opacity: 0.4 + hoverOpacity,
          boxShadow: hoverOpacity
            ? `0 0 ${8 * hoverIntensity}px rgba(255,255,255,${hoverOpacity}) inset`
            : undefined,
        };

        return (
          <div
            key={idx}
            className={cn(
              "grid-cell relative border-[0.5px] transition-all duration-200 will-change-transform",
              isClicked && "animate-cell-ripple",
              !interactive && "pointer-events-none"
            )}
            style={style}
            onMouseEnter={() => onCellHover({ row: rowIdx, col: colIdx })}
            onMouseLeave={() => onCellHover(null)}
            onClick={interactive ? () => onCellClick(rowIdx, colIdx) : undefined}
          />
        );
      })}
    </div>
  );
};
