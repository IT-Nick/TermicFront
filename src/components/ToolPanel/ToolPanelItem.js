import React from "react";

const ToolPanelItem = ({ item, onItemDragStart }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("application/json", JSON.stringify(item));
    onItemDragStart(event);
  };

  return (
    <div
      className="tool-panel-item"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img src={item.icon} alt={item.label} />
      <span>{item.label}</span>
    </div>
  );
};

export default ToolPanelItem;
