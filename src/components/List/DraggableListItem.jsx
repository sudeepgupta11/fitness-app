import React, { useRef } from "react";

const DraggableListItem = (props) => {
  const itemRef = useRef(null);

  const onDragStart = (e) => {
    if (props.onDragStart) {
      props.onDragStart(props.index);
    }
  };

  const onDragEnter = () => itemRef.current.classList.add("dragover");

  const onDragLeave = () => itemRef.current.classList.remove("dragover");

  const onDragOver = (e) => e.preventDefault();

  const onDrop = () => {
    itemRef.current.classList.remove("dragover");
    props.onDrop(props.index);
  };

  return (
    <li
      ref={itemRef}
      className="draggable-list__item"
      draggable={props.draggable !== undefined ? props.draggable : true}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.children}
    </li>
  );
};

export default DraggableListItem;
