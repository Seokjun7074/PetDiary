import {
  DiaryCardContainer,
  DiaryContent,
  DiaryContentContainer,
  DiaryTittle,
  DiaryImage,
} from "./style";

function DiaryCard(props) {
  return (
    <DiaryCardContainer>
      {/* <DiaryImageContainer></DiaryImageContainer> */}
      <DiaryImage src="https://a.fsdn.com/con/app/proj/testimages/screenshots/img_640x360_3x8bit_RGB_color_SMPTE_RP_219_2002.png/max/max/1" />
      <DiaryContentContainer>
        <DiaryTittle>다이어리 제목</DiaryTittle>
        <DiaryContent>
          {props.content ? props.content : `kkkkkkkkkkk`}
        </DiaryContent>
      </DiaryContentContainer>
    </DiaryCardContainer>
    // <div>
    //     {/* 다이어리카드 컴테이너 */}
    //     {/* 다이어리 포토 */}
    //     {/* 다이어리 타이틀 */}
    //     {/* 다이어리 컨텐츠 */}
    // </div>
  );
}

export default DiaryCard;
