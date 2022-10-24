import React from "react";
import { Processes } from "../../types/types";
import {
  Bot,
  Container,
  GreyLabelH5,
  Icon,
  InfoH5,
  Line,
  NameH1,
  NameH3,
  TimeContainer,
  TitleH3,
  Top,
} from "./styled";
import moment from "moment";
import RepitIcon from "./assets/repitIcon.svg";
import ActiveTimeIcon from "./assets/activeTimeIcon.svg";
import ClockIcon from "./assets/clockIcon.svg";
import InProgressIcon from "./assets/inProgressIcon.svg";
import PeopleIcon from "./assets/peopleIcon.svg";

moment.locale("ru");

export default function ProcessItem({ process }: { process: Processes }) {
  return (
    <Container>
      <Top>
        <TitleH3>{process.name}</TitleH3>
        <GreyLabelH5>На карту процесса</GreyLabelH5>
      </Top>
      <Line />
      <Bot>
        <div
          style={{ display: "flex", alignSelf: "center", margin: "60px 28px" }}
        >
          <Icon src={RepitIcon} />
          <NameH1>
            {process.numberOfExecutions}
            <GreyLabelH5>выполнено раз</GreyLabelH5>
          </NameH1>
        </div>
        <div style={{ alignSelf: "center", margin: "36px 0" }}>
          <div style={{ display: "flex" }}>
            <Icon src={ActiveTimeIcon} style={{ margin: "24px 10px 0 0" }} />
            <NameH3>
              {moment.unix(process.averageLeadTime).format("hh ч mm м")}
              <GreyLabelH5>среднее время выполнения</GreyLabelH5>
            </NameH3>
          </div>
          <div style={{ display: "flex" }}>
            <Icon src={ClockIcon} style={{ margin: "24px 10px 0 0" }} />
            <NameH3>
              {moment.unix(process.averageActiveTime).format("hh ч mm м")}
              <GreyLabelH5>среднее активное время</GreyLabelH5>
            </NameH3>
          </div>
        </div>
        <div style={{ alignSelf: "center", margin: "36px 0" }}>
          <div style={{ display: "flex" }}>
            <Icon src={InProgressIcon} style={{ margin: "24px 10px 0 0" }} />
            <NameH3>
              {process.employeesInvolvedProcess} сотрудников
              <GreyLabelH5>участвует в процессе</GreyLabelH5>
            </NameH3>
          </div>
          <div style={{ display: "flex" }}>
            <Icon src={PeopleIcon} style={{ margin: "24px 10px 0 0" }} />
            <NameH3>
              {process.numberOfScenarios} сценариев
              <GreyLabelH5>в процессе</GreyLabelH5>
            </NameH3>
          </div>
        </div>
        <TimeContainer>
          <div>
            <GreyLabelH5>
              Начало
              <InfoH5>
                {moment.unix(process.start).format("DD MMMM yyyy")}
              </InfoH5>
            </GreyLabelH5>
          </div>
          <div>
            <GreyLabelH5>
              Окончание
              <InfoH5>{moment.unix(process.end).format("DD MMMM yyyy")}</InfoH5>
            </GreyLabelH5>
          </div>
          <div>
            <GreyLabelH5>
              Загрузка
              <InfoH5>
                {moment.unix(process.loading).format("DD MMMM yyyy")}
              </InfoH5>
            </GreyLabelH5>
          </div>
        </TimeContainer>
      </Bot>
    </Container>
  );
}
