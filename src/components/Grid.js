import React from "react";

const Grid = ({ width, height, gridSize }) => {
  const horizontalLines = [];
  const verticalLines = [];

  for (let i = 0; i <= width; i += gridSize) {
    verticalLines.push(
      <line
        key={`v${i}`}
        x1={i}
        y1={0}
        x2={i}
        y2={height}
        stroke="#ccc"
        strokeWidth={0.5}
      />
    );
  }

  for (let i = 0; i <= height; i += gridSize) {
    horizontalLines.push(
      <line
        key={`h${i}`}
        x1={0}
        y1={i}
        x2={width}
        y2={i}
        stroke="#ccc"
        strokeWidth={0.5}
      />
    );
  }

  return (
    <g>
      {verticalLines}
      {horizontalLines}
    </g>
  );
};

export default Grid;
