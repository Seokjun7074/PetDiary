import Home from "./pages/home/index.js";
import NaverLogin from "./pages/naverlogin/index.js";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // 추후에 라우터 관리 여기다가

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/naverlogin" element={<NaverLogin />}></Route>
        {/* <Home></Home> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
