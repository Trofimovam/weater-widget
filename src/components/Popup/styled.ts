import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerPopup = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const LeftMenu = styled.div`
  background: #404064;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
  /* padding: 18px 24px; */
  color: #fff;
  width: 250px;
  height: 100%;
`;
export const RightMenu = styled.div`
  width: 100%;
  background: #20262b;
  opacity: 0.5;
  cursor: pointer;
`;

export const ClosePopup = styled.div`
  height: 60px;
  background: #535374;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Item = styled(NavLink)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  margin: 20px 0;
  text-decoration: unset;
  cursor: pointer;
  color: unset;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 16px 0 0;
`;
