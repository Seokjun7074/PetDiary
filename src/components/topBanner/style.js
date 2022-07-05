import styled from "styled-components";
import { theme } from "../../style/theme";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: whitesmoke; */
`;

export const Tittle = styled.h1`
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.tittle};
  /* color: tomato; */
  color: black;
`;
