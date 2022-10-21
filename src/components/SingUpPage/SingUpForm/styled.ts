import { StyledButton } from "src/components/YellowButton/styled";
import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 48px;
  width: 424px;
  height: 656px;
  background: white;
  border-radius: 2px;
  align-self: flex-end;
  margin: auto auto 0 auto;
`;

export const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #d6dce9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px;
  margin: 6px 0;
  color: #6879bb;

  &:hover {
    background: #ffffff;
    border: 1px solid #415fd5;
    border-radius: 4px;
    color: #415fd5;
  }
  &:focus,
  :active {
    background: #ffffff;
    border: 1px solid #415fd5;
    border-radius: 4px;
    color: #415fd5;
  }
  &:focus-visible {
    background: #ffffff;
    border: 1px solid #415fd5;
    border-radius: 4px;
    color: #415fd5;
    outline-color: unset;
  }
  &.error {
    background: #ffffff;
    border: 1px solid #ee4141;
    border-radius: 4px;
  }
`;

export const Title = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin: 0 0 14px 0;
  color: #404064;
`;

export const Button = styled(StyledButton)``;

export const LaberError = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #ee4141;
`;
