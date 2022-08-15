import React, { useRef } from "react";
import { Icon, City } from "./styled";
import deleteIcon from "./deleteIcon.svg";
import burgerIcon from "./burgerIcon.svg";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";

interface ICityCardProps {
  city: string;
  handleClickDeleteCity: (event, city) => void;
  moveCity: (dragIndex, hoverIndex) => void;
  index: number;
}

interface DragItem {
  index: number;
}

export default function CityCard({
  handleClickDeleteCity,
  city,
  moveCity,
  index,
}: ICityCardProps) {
  const cityRef = useRef<HTMLImageElement>(null);

  const [, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: "CITY",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!cityRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = cityRef.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCity(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: "CITY",
    item: () => {
      return { index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(cityRef));
  return (
    <City key={city} ref={cityRef}>
      <Icon src={burgerIcon} />
      {city}
      <Icon
        src={deleteIcon}
        onClick={(event) => handleClickDeleteCity(event, city)}
      />
    </City>
  );
}
