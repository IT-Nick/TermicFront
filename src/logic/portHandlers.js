export const handlePortMouseDown = (event, port, onPortMouseDown) => {
  event.stopPropagation();
  onPortMouseDown(port);
};

export const handlePortMouseUp = (event, port, onPortMouseUp) => {
  event.stopPropagation();
  onPortMouseUp(port);
};
