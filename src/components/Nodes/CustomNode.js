import NodeBase from "./NodeBase";
import InputPort from "./InputPort";
import OutputPort from "./OutputPort";

const CustomNode = ({
  x,
  y,
  onMove,
  onMoveStart,
  onMoveEnd,
  onPortMouseDown,
  onPortMouseUp
}) => {
  const width = 100;
  const height = 50;
  const portRadius = 5;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.target.setPointerCapture(event.pointerId);

    onMoveStart();

    const handlePointerMove = (moveEvent) => {
      const newX = x + (moveEvent.pageX - event.pageX);
      const newY = y + (moveEvent.pageY - event.pageY);
      onMove(newX, newY);
    };

    const handlePointerUp = () => {
      event.target.releasePointerCapture(event.pointerId);
      event.target.removeEventListener("pointermove", handlePointerMove);
      event.target.removeEventListener("pointerup", handlePointerUp);

      onMoveEnd();
    };

    event.target.addEventListener("pointermove", handlePointerMove);
    event.target.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <NodeBase
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={handlePointerDown}
    >
      <InputPort
        x={0}
        y={height / 2}
        radius={portRadius}
        handlePortMouseDown={onPortMouseDown}
      />
      <OutputPort
        x={width}
        y={height / 2}
        radius={portRadius}
        handlePortMouseDown={onPortMouseDown}
      />
    </NodeBase>
  );
};

export default CustomNode;
