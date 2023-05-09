import React, { useState } from "react";
import ZoomableCanvas from "./ZoomableCanvas";
import Grid from "./Grid";
import CustomNode from "./Nodes/CustomNode";
import EdgeBase from "./Edges/EdgeBase";

const Workspace = ({ elements, onElementDrop, onElementMove }) => {
  const [edges, setEdges] = useState([]);
  const [connectingEdge, setConnectingEdge] = useState(null);

  const [isNodeMoving, setIsNodeMoving] = useState(false);
  const width = 1000;
  const height = 800;
  const gridSize = 20;

  const handlePortMouseDown = (port) => {
    setConnectingEdge({ source: port, target: { x: port.x, y: port.y } });
  };

  const handlePortMouseUp = (port) => {
    if (connectingEdge) {
      setEdges([
        ...edges,
        { id: edges.length, source: connectingEdge.source, target: port }
      ]);
      setConnectingEdge(null);
    }
  };

  const handleElementMove = (elementId, newX, newY) => {
    // ...
    const newEdges = edges.map((edge) => {
      if (edge.source.id === elementId) {
        return { ...edge, source: { ...edge.source, x: newX, y: newY } };
      } else if (edge.target.id === elementId) {
        return { ...edge, target: { ...edge.target, x: newX, y: newY } };
      } else {
        return edge;
      }
    });
    setEdges(newEdges);
  };

  const handleElementMoveStart = () => {
    setIsNodeMoving(true);
  };

  const handleElementMoveEnd = () => {
    setIsNodeMoving(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const item = JSON.parse(event.dataTransfer.getData("application/json"));

    const svg = event.currentTarget;
    const { x, y } = event.nativeEvent;

    onElementDrop(item, x, y);
  };

  return (
    <ZoomableCanvas
      width={width}
      height={height}
      isNodeMoving={isNodeMoving}
      edges={edges}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Grid width={width} height={height} gridSize={gridSize} />
      {elements.map((element) => (
        <CustomNode
          key={element.id}
          x={element.x}
          y={element.y}
          onMove={(newX, newY) => onElementMove(element.id, newX, newY)}
          onMoveStart={handleElementMoveStart}
          onMoveEnd={handleElementMoveEnd}
        />
      ))}
    </ZoomableCanvas>
  );
};

export default Workspace;
