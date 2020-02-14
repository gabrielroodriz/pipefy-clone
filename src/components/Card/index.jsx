import React, { useRef, useContext } from "react";
import BoardContext from "../Board/context";
import { useDrag, useDrop } from "react-dnd";
import { Container, Label } from "./styles";

export default function Card({ data, index, listIndex}) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: "CARD",
      index,
      listIndex
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {

      const targetListIndex = item.listIndex;
      const draggedListIndex = item.listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;
      const targetSize = ref.current.getBoudingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }
      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });
  dragRef(dropRef(ref));
  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {" "}
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}{" "}
      </header>{" "}
      <p> {data.content} </p> {data.user && <img src={data.user} alt="" />}{" "}
    </Container>
  );
}
