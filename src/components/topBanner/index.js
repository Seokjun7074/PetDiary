import { Link } from "react-router-dom";
import LoginButton from "../loginButton.js";
import { Tittle, MenuContainer } from "./style";

function TopBanner() {
  return (
    <MenuContainer>
      <Tittle>오늘묘했개~?</Tittle>
      <LoginButton></LoginButton>
    </MenuContainer>
  );
}

export default TopBanner;
