import React from "react";
import { Calendar, DateLocalizer } from "react-big-calendar";
import events from "./events";
import styled from "styled-components";

const Styles = styled.div`
  .min-height {
    height: "100vh";
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
        events={events}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2019, 1, 8)}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper
        }}
        localizer={localizer}
        className="min-height"
      />
    </Styles>
  );
};

export default BasicCalendar;
