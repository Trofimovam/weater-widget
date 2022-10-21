import styled from "styled-components";

export const StyledButton = styled.button`
  background: #ffce0c;
  border-radius: 4px;
  height: 36px;
  box-sizing: border-box;
  border: unset;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    border: 1px solid #fffbea;
    box-shadow: 0px 1px 10px #ffd73b;
  }
  &:disabled {
    background: #fffbea;
    border: 1px solid #fffbea;
    box-shadow: 0px 1px 10px #ffd73b;
  }
`;
