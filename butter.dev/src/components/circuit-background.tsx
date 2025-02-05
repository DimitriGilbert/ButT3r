"use client";

import { useEffect, useState } from "react";
import { useTheme } from "~/components/theme-provider";

class CircuitBoardPattern {
  private width: number;
  private height: number;
  private density: number; // Controls how many paths/dots are generated
  private minSegmentLength: number = 20;
  private dotRadius: number = 3;
  private paths: string[] = [];
  private dots: Array<{ x: number; y: number }> = [];

  constructor(width: number, height: number, density: number = 0.3) {
    this.width = width;
    this.height = height;
    this.density = density;
  }

  private randomPoint(): { x: number; y: number } {
    return {
      x: Math.floor(Math.random() * this.width),
      y: Math.floor(Math.random() * this.height)
    };
  }

  private snapToGrid(value: number, gridSize: number = 16): number {
    return Math.round(value / gridSize) * gridSize;
  }

  private generatePath(): string {
    const start = this.randomPoint();
    const numSegments = 2 + Math.floor(Math.random() * 3);
    let currentPoint = {
      x: this.snapToGrid(start.x),
      y: this.snapToGrid(start.y)
    };
    let pathData = `M ${currentPoint.x} ${currentPoint.y}`;

    for (let i = 0; i < numSegments; i++) {
      // Decide direction: horizontal or vertical
      const isHorizontal = Math.random() > 0.5;
      const length = this.snapToGrid(
        this.minSegmentLength + Math.random() * 100
      );

      if (isHorizontal) {
        currentPoint.x += Math.random() > 0.5 ? length : -length;
        currentPoint.x = Math.max(0, Math.min(this.width, currentPoint.x));
      } else {
        currentPoint.y += Math.random() > 0.5 ? length : -length;
        currentPoint.y = Math.max(0, Math.min(this.height, currentPoint.y));
      }

      pathData += ` L ${currentPoint.x} ${currentPoint.y}`;
      
      // Add a dot at the end of each segment
      this.dots.push({ ...currentPoint });
    }

    return pathData;
  }

  private generateDot(x: number, y: number): string {
    return `M ${x} ${y} a ${this.dotRadius} ${this.dotRadius} 0 1 0 0.1 0`;
  }

  generate(): string {
    this.paths = [];
    this.dots = [];

    // Generate paths
    const numPaths = Math.floor((this.width * this.height * this.density) / 5000);
    for (let i = 0; i < numPaths; i++) {
      this.paths.push(this.generatePath());
    }

    // Generate additional random dots
    const numDots = Math.floor((this.width * this.height * this.density) / 1000);
    for (let i = 0; i < numDots; i++) {
      const point = this.randomPoint();
      this.dots.push({
        x: this.snapToGrid(point.x),
        y: this.snapToGrid(point.y)
      });
    }

    // Create SVG
    const pathElements = this.paths.join(' ');
    const dotElements = this.dots
      .map(dot => this.generateDot(dot.x, dot.y))
      .join(' ');

    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}">
        <path fill="none" stroke="#000" stroke-width="2" d="${pathElements}"/>
        <path fill="#000" d="${dotElements}"/>
      </svg>
    `;
  }
}

export function CircuitBackground() {
  const { theme } = useTheme();
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const pattern = new CircuitBoardPattern(304, 304, 0.3);
    const generatedSvg = pattern.generate()
      .replace(/#000/g, theme === "dark" ? "#9C92AC" : "#2e026d")
      .replace(/stroke-width="2"/, 'stroke-width="1"');
    
    const encodedSvg = encodeURIComponent(generatedSvg);
    setSvg(`url("data:image/svg+xml,${encodedSvg}")`);
  }, [theme]);

  return (
    <div 
      className="fixed inset-0 -z-10 opacity-20 dark:opacity-15 transition-opacity"
      style={{ backgroundImage: svg }}
    />
  );
} 