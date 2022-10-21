import styled from "styled-components";
import { StyledButton } from "../YellowButton/styled";

export const Container = styled.div`
  background: #ebf2fb;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #404064;
`;
export const Button = styled(StyledButton)``;

export const TopContainer = styled.div`
  display: flex;
  margin: 60px 0 0 0;
  padding: 22px;
  justify-content: space-between;
`;
