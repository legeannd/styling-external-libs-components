import { RangeCalendar } from "@adobe/react-spectrum";
import { getLocalTimeZone, parseAbsolute } from "@internationalized/date";
import { useState } from "react";
import { Container } from "./styles";

export function DateRangeCalendar() {
  const [date, setDate] = useState({
    start: parseAbsolute(new Date().toISOString(), getLocalTimeZone()),
    end: parseAbsolute(new Date().toISOString(), getLocalTimeZone()),
  });

  return (
    <Container>
      <span>
        Data inicial: <span>{date.start.toString()}</span>
      </span>
      <span>
        Data final: <span>{date.end.toString()}</span>
      </span>
      <RangeCalendar value={date} onChange={setDate} visibleMonths={2} />
    </Container>
  );
}
