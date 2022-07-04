import DiaryCard from "../../components/diaryCard";
import TopBanner from "../../components/topBanner";
import { HomeContainer, HomeSection } from "./style";

// import { useState } from "react";

function Home() {
  function getAccessToken() {
    const location = window.location.href.split("=")[1];
    const access_token = location.split("&")[0];

    console.log(access_token);
  }
  if (window.location.href.includes("access_token")) {
    console.log("Yes");
    getAccessToken();
  }
  return (
    <HomeContainer>
      {/* 상단 배너 */}
      <TopBanner></TopBanner>
      {/* 홈 화면의 내용들 */}
      <HomeSection>
        <DiaryCard content={"hi"}></DiaryCard>
        <DiaryCard
          content={
            "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트"
          }
        ></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
      </HomeSection>
    </HomeContainer>
  );
}

export default Home;
