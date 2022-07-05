import { Link } from "react-router-dom";
import LoginButton from "../loginButton.js";
import { Tittle, MenuContainer, HeaderContainer } from "./style";

function TopBanner() {
  return (
    <HeaderContainer>
      <MenuContainer>
        <Tittle>오늘묘했개~?</Tittle>
        <LoginButton></LoginButton>
      </MenuContainer>
    </HeaderContainer>
  );
}

export default TopBanner;
