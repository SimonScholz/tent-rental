import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/de";
import React from "react";
import { Container } from "react-bootstrap";
import BasicCalendar from "../components/Calendar/BasicCalendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";

const Calendar: React.FC = () => {
  moment.locale("de");
  console.log(moment.locale);
  const localizer = momentLocalizer(moment);

  return (
    <Container className="mt-3">
      <h2>Kalender</h2>
      <p>Schauen Sie ob die gewünschten Tage noch frei sind.</p>
      <BasicCalendar localizer={localizer} />
    </Container>
  );
};

export default Calendar;
