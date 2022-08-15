import styled from "styled-components";

export const City = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  & > img {
    margin: 0 5px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
