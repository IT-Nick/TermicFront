import React, { useRef, useEffect } from "react";
import EdgeBase from "./Edges/EdgeBase";

import * as d3 from "d3";

const ZoomableCanvas = ({
  width,
  height,
  isNodeMoving,
  edges,
  connectingEdge,
  children
}) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!isNodeMoving) {
      d3.select(svgRef.current).call(
        d3.zoom().on("zoom", (event) => {
          d3.select(svgRef.current)
            .select("g")
            .attr("transform", event.transform);
        })
      );
    } else {
      // Отключить масштабирование
      d3.select(svgRef.current).on(".zoom", null);
    }
  }, [isNodeMoving]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g>{children}</g>
      {edges.map((edge) => (
        <EdgeBase
          key={edge.id}
          x1={edge.source.x}
          y1={edge.source.y}
          x2={edge.target.x}
          y2={edge.target.y}
          stroke="#000"
          strokeWidth={2}
        />
      ))}
      {connectingEdge && (
        <EdgeBase
          x1={connectingEdge.source.x}
          y1={connectingEdge.source.y}
          x2={connectingEdge.target.x}
          y2={connectingEdge.target.y}
          stroke="#000"
          strokeWidth={2}
        />
      )}
    </svg>
  );
};

export default ZoomableCanvas;
