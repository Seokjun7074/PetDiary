import DiaryCard from "../../components/diaryCard";
import TopBanner from "../../components/topBanner";
import { HomeContainer, HomeSection } from "./style";

import { useState } from "react";

function Home() {
  const [modal, setModal] = useState(false);
  function getAccessToken() {
    const location = window.location.href.split("=")[1];
    const access_token = location.split("&")[0];
    const header = {
      // "Content-type": "application/json",
      // Authorization: `Bearer ${access_token}`,
    };
    console.log(access_token);
  }
  if (window.location.href.includes("access_token")) {
    getAccessToken();
  }
  console.log(modal);
  return (
    <HomeContainer>
      {/* 상단 배너 */}
      <TopBanner></TopBanner>
      {/* 홈 화면의 내용들 */}
      <HomeSection>
        <DiaryCard content={"hi"}></DiaryCard>
        <DiaryCard
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum consequuntur in delectus veniam architecto voluptatem quisquam dolor harum, neque eaque, adipisci amet recusandae voluptatum temporibus tempore. Soluta, eius vitae?"
          }
        ></DiaryCard>
        <DiaryCard
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum consequuntur in delectus veniam architecto voluptatem quisquam dolor harum, neque eaque, adipisci amet recusandae voluptatum temporibus tempore. Soluta, eius vitae?"
          }
        ></DiaryCard>
        <DiaryCard
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum consequuntur in delectus veniam architecto voluptatem quisquam dolor harum, neque eaque, adipisci amet recusandae voluptatum temporibus tempore. Soluta, eius vitae?"
          }
        ></DiaryCard>
      </HomeSection>
    </HomeContainer>
  );
}

export default Home;
