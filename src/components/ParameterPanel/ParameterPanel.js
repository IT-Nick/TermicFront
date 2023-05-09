import React from "react";

const ParameterPanel = ({ selectedNode, onParameterChange, onSave }) => {
  if (!selectedNode) {
    return null;
  }

  const handleChange = (event) => {
    onParameterChange(selectedNode.id, event.target.name, event.target.value);
  };

  const handleSave = () => {
    onSave(selectedNode.id);
  };

  return (
    <div className="parameter-panel">
      <h3>Parameters for Node {selectedNode.id}</h3>
      <label>
        Parameter 1:
        <input
          type="text"
          name="parameter1"
          value={selectedNode.parameter1}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ParameterPanel;
