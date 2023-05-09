import React, { useState } from "react";
import Workspace from "./components/Workspace";
import ToolPanel from "./components/ToolPanel/ToolPanel";
import ParameterPanel from "./components/ParameterPanel/ParameterPanel";
import "./App.css";

const initialToolPanelItems = [
  { id: 1, icon: "icon1.png", label: "Compressor", x: 100, y: 100 },
  { id: 2, icon: "icon2.png", label: "Filter", x: 200, y: 100 },
  { id: 3, icon: "icon3.png", label: "Equalizer", x: 300, y: 100 },
  { id: 4, icon: "icon4.png", label: "Reverb", x: 400, y: 100 }
];

const initialEdges = [
  { id: 1, source: { x: 110, y: 125 }, target: { x: 210, y: 125 } },
  { id: 2, source: { x: 310, y: 125 }, target: { x: 410, y: 125 } },
  { id: 3, source: { x: 510, y: 125 }, target: { x: 610, y: 125 } }
];

const App = () => {
  const [elements, setElements] = useState(initialToolPanelItems);
  const [selectedNode, setSelectedNode] = useState(null);

  const updateElementPosition = (elementId, newX, newY) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === elementId ? { ...element, x: newX, y: newY } : element
      )
    );
  };

  const handleItemDragStart = (event, item) => {
    event.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  const handleDrop = (item, x, y) => {
    setElements([...elements, { ...item, x, y }]);
  };

  const handleElementMove = (id, newX, newY) => {
    setElements(
      elements.map((element) =>
        element.id === id ? { ...element, x: newX, y: newY } : element
      )
    );
  };

  return (
    <div className="app">
      <ToolPanel
        items={initialToolPanelItems}
        onItemDragStart={handleItemDragStart}
      />
      <Workspace
        elements={elements}
        onElementDrop={handleDrop}
        onElementMove={updateElementPosition}
      />
      <ParameterPanel selectedNode={selectedNode} />
      <button>Calculate</button>
      <button>Save State</button>
    </div>
  );
};

export default App;
