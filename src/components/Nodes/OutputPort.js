import React from "react";

const OutputPort = ({ x, y, radius, handlePortMouseDown }) => {
return (
    <circle
      cx={x}
      cy={y}
      r={radius}
      fill="white"
      stroke="black"
      onMouseDown={handlePortMouseDown}
    />
  );
};

export default OutputPort;
