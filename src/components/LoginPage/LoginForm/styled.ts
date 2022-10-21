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
`;

export const Button = styled(StyledButton)``;
