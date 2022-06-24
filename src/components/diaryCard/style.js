import styled from "styled-components";

export const DiaryCardContainer = styled.article`
  /* border: 1px solid black; */
  border-radius: 5px;
  box-shadow: 2px 4px 12px rgb(255 255 255 / 8%);
  overflow: hidden;
  width: 350px;
  display: flex;
  flex-direction: column;
  /* background-color: tomato; */
  box-shadow: 2px 4px 12px rgb(0 0 0 / 12%);
`;
export const DiaryImageContainer = styled.div`
  background-color: blue;
  height: 350px;
  width: 100%;
`;
export const DiaryImage = styled.img`
  display: block;
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  /* height: 100%; */
  /* height: 350px; */
  width: 100%;
  object-fit: cover;
`;
export const DiaryContentContainer = styled.div`
  padding: ${(props) => props.theme.padding.base};

  height: 100%;
  /* background-color: pink; */
`;
export const DiaryTittle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  padding: ${(props) => props.theme.padding.base};
`;

export const DiaryContent = styled.p`
  text-align: left;
  word-wrap: break-word;
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: ${(props) => props.theme.padding.base};
`;
