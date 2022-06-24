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
      <DiaryImage src="https://mond-al.github.io/assets/images/forTest/ratio/all_ratio/image_21_1400x1050.png" />
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
