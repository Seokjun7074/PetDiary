import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeSection = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  place-content: center;
  gap: 2rem;
  /* flex-direction: column; */

  /* width: 850px; */
  width: 60%;
  min-width: 400px;
  height: 100%;
  /* background-color: tomato; */
`;

export const Box = styled.div`
  /* height: 80vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf7f2;
`;
