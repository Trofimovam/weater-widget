import React, { useState } from "react";
import Popup from "../Popup";
import { Container, Icon, OpenPopup } from "./styled";
import Union from "./Union.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container>
        <OpenPopup onClick={handleClick}>
          <Icon src={Union} />
          Меню
        </OpenPopup>
      </Container>
      {open && <Popup handleClick={handleClick} />}
    </>
  );
}
