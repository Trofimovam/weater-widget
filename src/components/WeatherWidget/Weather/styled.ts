import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  align-items: left;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 0 10px 0;
  width: 250px;

  & > span {
    padding: 5px 10px 5px 10px;
  }
`;

export const City = styled.span`
  font-weight: 700;
`;

export const Temperature = styled.span``;
export const Wind = styled.span``;
export const Pressure = styled.span``;
export const Humidity = styled.span``;
export const Visibility = styled.span``;
