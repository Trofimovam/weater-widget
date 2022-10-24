import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin: 6px 12px;
`;

export const Top = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const TitleH3 = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  color: #6879bb;
`;
export const Line = styled.div`
  height: 0px;
  border: 1px solid #d6dce9;
  width: 100%;
`;
export const Bot = styled.div`
  display: grid;
  grid-template-columns: 289px 260px 260px 260px;
`;

export const NameH1 = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: unset;

  color: #535374;
`;

export const NameH3 = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 24px 0 0 0;

  color: #535374;
`;

export const GreyLabelH5 = styled.h5`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin: unset;

  width: 170px;
  justify-content: space-between;

  color: #999999;
`;

export const InfoH5 = styled.h5`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: unset;
  display: flex;
  align-items: center;

  color: #333333;
`;

export const TimeContainer = styled.div`
  align-self: center;
  margin: 36px 0;
  & > div {
    display: flex;
    margin: 6px 0;
    width: 180px;
  }
`;

export const Icon = styled.img`
  display: flex;
  align-self: flex-start;
  margin: 10px;
`;
