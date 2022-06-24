import Calendar from "react-calendar";
import "../../style/calendar.css";
import DiaryCard from "../../components/diaryCard";
import TopBanner from "../../components/topBanner";
import { HomeContainer, HomeSection, Box } from "./style";

import { useState } from "react";

function Home() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate);
  return (
    <HomeContainer>
      {/* 상단 배너 */}
      <TopBanner></TopBanner>
      {/* 홈 화면의 내용들 */}
      <HomeSection>
        {/* <Box>
          <Calendar
            locale="en-EN"
            calendarType="Hebrew" //일요일부터 시작
            onChange={setDate}
            value={date}
            minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
            maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
            maxDate={new Date()}
            navigationLabel={null}
            next2Label={null}
            prev2Label={null}
          ></Calendar>
        </Box> */}
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
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
