import React, { useState } from "react";
import { Calendar } from "react-calendar";
import './calendar.css'
// import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <Calendar
        className="border p-5 rounded-lg "
        onChange={() => {
          setValue(value);
          console.log(value);
        }}
        value={value}
      />
    </div>
  );
};

export default CalendarComponent;
