import { Link } from "react-router-dom";
import LoginButton from "../loginButton.js";
import { Tittle, MenuContainer } from "./style";

function TopBanner() {
  return (
    <MenuContainer>
      <Tittle>HEADER</Tittle>
      <LoginButton></LoginButton>
      {/* <Link to="/naverlogin">
        <h5>NAVER</h5>
      </Link> */}
    </MenuContainer>
  );
}

export default TopBanner;
