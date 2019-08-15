import React from "react";
import { Calendar, DateLocalizer } from "react-big-calendar";
import events from "./events";
import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Styles = styled.div`
  .min-height {
    height: 70vh;
  }
`;

interface BasicCalendarProps {
  localizer: DateLocalizer;
}

const ColoredDateCellWrapper = ({ children }: any) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue"
    }
  });

const BasicCalendar: React.FC<BasicCalendarProps> = props => {
  const { localizer } = props;
  return (
    <Styles>
      <Calendar
        views={{ month: true, agenda: true }}
        events={events}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper
        }}
        localizer={localizer}
        messages={{
          today: "Heute",
          previous: "Zurück",
          next: "Weiter",
          month: "Monat"
        }}
        className="min-height"
        min={new Date()}
      />
    </Styles>
  );
};

export default BasicCalendar;
