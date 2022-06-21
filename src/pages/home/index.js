import DiaryCard from "../../components/diaryCard";
import TopBanner from "../../components/topBanner";
import { HomeContainer, HomeSection } from "./style";

function Home() {
  return (
    <HomeContainer>
      {/* 상단 배너 */}
      <TopBanner></TopBanner>
      {/* 홈 화면의 내용들 */}
      <HomeSection>
        <DiaryCard></DiaryCard>
        <DiaryCard></DiaryCard>
        {/* 다이어리 컨테이너들 쭈루룩 */}
        {/* 다이어리 컨테이너들 쭈루룩 */}
        {/* 다이어리 컨테이너들 쭈루룩 */}
      </HomeSection>
    </HomeContainer>
  );
}

export default Home;
