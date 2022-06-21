import styled from "styled-components";
import { theme } from "../../style/theme";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: whitesmoke; */
`;

export const Tittle = styled.h1`
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.title};
  /* color: tomato; */
  color: black;
`;
