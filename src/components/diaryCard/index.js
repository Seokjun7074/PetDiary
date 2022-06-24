import {
  DiaryCardContainer,
  DiaryImageContainer,
  DiaryContent,
  DiaryContentContainer,
  DiaryImage,
} from "./style";

function DiaryCard() {
  return (
    <DiaryCardContainer>
      <DiaryImageContainer>
        <DiaryImage src="https://mond-al.github.io/assets/images/forTest/ratio/all_ratio/image_1_160x120.png" />
      </DiaryImageContainer>
      <DiaryContentContainer>
        <DiaryContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, ab? Omnis, commodi sit. Culpa fuga, vitae officiis
          expedita voluptatum reiciendis beatae, necessitatibus doloribus, aut
          labore porro impedit ipsa facere incidunt?
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
