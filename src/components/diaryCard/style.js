import styled from "styled-components";

export const DiaryCardContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin: ${(props) => props.theme.margin.base};
  padding: ${(props) => props.theme.padding.base};
  width: 50vw;
  height: 20%;
  display: flex;
`;

export const DiaryImageContainer = styled.div`
  width: 20vh;
  height: 20vh;
  border: 2px solid black;
  border-radius: 20px;
`;

export const DiaryContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: ${(props) => props.theme.padding.base};
`;
