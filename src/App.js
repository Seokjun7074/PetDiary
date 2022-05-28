import "./App.css";

import Calendar from "react-calendar";
import "./calendar.css";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <h1>asdf</h1>
      <Calendar locale="en-EN" />
      {/* onClickDay */}
    </div>
  );
}

export default App;
