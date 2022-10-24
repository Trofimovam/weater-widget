import React, { useCallback } from "react";
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
import { useCurrentUser } from "../hooks/useCurrentUser";

interface IProps {
  handleClick: () => void;
}

export default function Popup({ handleClick }: IProps) {
  const { signOut, user } = useCurrentUser();

  const handleLogoutClick = useCallback(async () => {
    if (signOut) {
      await signOut();
    }
  }, [signOut]);

  return (
    <ContainerPopup>
      <LeftMenu>
        <ClosePopup onClick={handleClick}>
          <Icon src={UnionIcon} />
          Proceset
        </ClosePopup>
        <Item to='/edit-user'>
          <Icon src={HeadIcon} />
          {user?.firstName} {user?.secondName}
        </Item>
        <Item to='/data-list'>
          <Icon src={DiagramIcon} />
          Список процессов
        </Item>
        <Item to='#' onClick={handleLogoutClick}>
          Выход из профиля
        </Item>
      </LeftMenu>
      <RightMenu onClick={handleClick} />
    </ContainerPopup>
  );
}
