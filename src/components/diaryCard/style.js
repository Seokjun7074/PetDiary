import styled from "styled-components";

export const DiaryCardContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;

  margin-bottom: ${(props) => props.theme.margin.base};
  /* padding: ${(props) => props.theme.padding.base}; */
  width: 500px;
  height: 100%;
`;

export const DiaryImageContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
  /* display: inline-block; */
`;
export const DiaryContentContainer = styled(DiaryImageContainer)`
  background-color: whitesmoke;
`;

export const DiaryImage = styled.img`
  height: 100%;
`;

export const DiaryContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: ${(props) => props.theme.padding.base};
`;
