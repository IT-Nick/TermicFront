import React from "react";

const NodeBase = ({ x, y, width, height, onPointerDown, children }) => {
  return (
    <g
      className="node-base"
      transform={`translate(${x}, ${y})`}
      onPointerDown={onPointerDown}
    >
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="lightgray"
        stroke="black"
        strokeWidth="1"
      />
      {children}
    </g>
  );
};

export default NodeBase;
