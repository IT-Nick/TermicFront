import React from "react";

const EdgeBase = ({ x1, y1, x2, y2, stroke, strokeWidth }) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
};

export default EdgeBase;
