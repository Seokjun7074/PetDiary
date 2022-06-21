import Calendar from "react-calendar";
import "./calendar.css";
import Home from "./pages/home/index.js";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  // 추후에 라우터 관리 여기다가

  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
