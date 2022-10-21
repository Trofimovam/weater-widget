import React from "react";
import {
  ContainerPopup,
  LeftMenu,
  ClosePopup,
  Item,
  RightMenu,
  Icon,
} from "./styled";
import DiagramIcon from "./assets/Diag.svg";
import HeadIcon from "./assets/Head.svg";
import UnionIcon from "./assets/Union.svg";

interface IProps {
  handleClick: () => void;
}

export default function Popup({ handleClick }: IProps) {
  return (
    <ContainerPopup>
      <LeftMenu>
        <ClosePopup onClick={handleClick}>
          <Icon src={UnionIcon} />
          Proceset
        </ClosePopup>
        <Item to='/edit-user'>
          <Icon src={HeadIcon} />
          UserName
        </Item>
        <Item to='/data-list'>
          <Icon src={DiagramIcon} />
          Список процессов
        </Item>
      </LeftMenu>
      <RightMenu onClick={handleClick} />
    </ContainerPopup>
  );
}
