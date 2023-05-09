import React, { useState } from "react";
import Search from "./Search";
import ToolPanelItem from "./ToolPanelItem";
import "./ToolPanel.css";

const ToolPanel = ({ items, onItemDragStart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="tool-panel">
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="tool-panel__items">
        {filteredItems.map((item) => (
          <ToolPanelItem
            key={item.id}
            item={item}
            onDragStart={(event) => onItemDragStart(event, item)}
          />
        ))}
      </div>
    </aside>
  );
};

export default ToolPanel;
