import "./App.css";

import Calendar from "react-calendar";
import "./calendar.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(date);

  return (
    <div className="App">
      <h1>asdf</h1>
      <Calendar
        locale="en-EN"
        onChange={setDate}
        value={date}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
      />
      {/* onClickDay */}
    </div>
  );
}

export default App;
