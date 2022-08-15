import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: whitesmoke;
  border-radius: 5px;
  width: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  margin: 5px 0 0 auto;
  width: 30px;
  height: 30px;
`;

export const StyledInput = styled.input`
  margin: 10px 10px 0 10px;
`;

export const StyledButton = styled.button`
  margin: 10px 5px 0px 10px;
`;
