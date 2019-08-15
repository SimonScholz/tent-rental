import React from "react";
import { Container } from "react-bootstrap";
import BasicCalendar from "../Calendar/BasicCalendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styled from "styled-components";

const Styles = styled.div`
  .min-height {
    height: "100vh";
  }
`;

const Calendar: React.FC = () => {
  const localizer = momentLocalizer(moment);

  return (
    <Container className="mt-3 min-height">
      <h2>Calendar</h2>
      <p>Schauen Sie ob der gewünschte Tag noch frei ist.</p>
      <BasicCalendar localizer={localizer} />
    </Container>
  );
};

export default Calendar;
