import { styled } from 'styled-components';
import { USER_DATA } from '../../../core/mockCourseScore';
import { useEffect, useState } from 'react';
import ElectiveList from '../ClassList/ElectiveList';

export default function ProgressBox({ nowscore, title, majorname, maxscore, progressscore, majorcolor, type }) {
  const [isToggle, setIsToggle] = useState(false);
  function handleOpenToggle() {
    setIsToggle(!isToggle);
  }
  return (
    <BoxWrapper>
      <TitleWrapper>
        <TitleContainer>
          <Title>{title}</Title>
          <MajorName majorcolor={majorcolor}>{majorname}</MajorName>
        </TitleContainer>
        <CourseNum>
          {nowscore} / {maxscore}
        </CourseNum>
      </TitleWrapper>
      <ProgressBarWrapper>
        <ProgressBarBox progressscore={progressscore} />
      </ProgressBarWrapper>
      <button onClick={handleOpenToggle}>
        <ToggleText> ▼ 상세 내역 보기 </ToggleText>
        {isToggle && <ElectiveList type={type} />}
      </button>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 86rem;
  padding: 3.2rem 2.3rem 0 3.4rem;
  margin-bottom: 3rem;

  border: 1px solid #bbb;
  background-color: #fff;
  align-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;

  margin-bottom: 1.2rem;
`;

const Title = styled.h1`
  margin-right: 2.7rem;
  margin-left: 0.6rem;

  font-weight: 700;
  font-size: 2rem;
`;

const MajorName = styled.h1`
  color: ${(props) => props.majorcolor};
  font-weight: 700;
  font-size: 2rem;
`;

const CourseNum = styled.h1`
  margin-right: 1.2rem;

  color: #000;
  font-weight: 700;
  font-size: 2rem;
`;
const ToggleText = styled.h6`
  display: flex;
  justify-content: flex-end;

  margin: 1.45rem 0;

  color: #000;
  font-weight: 400;
  font-size: 1.2rem;
`;

const ProgressBarWrapper = styled.section`
  overflow: hidden;

  width: 100%;

  background-color: #eee;
`;

const ProgressBarBox = styled.article`
  width: ${(props) => props.progressscore}%;
  height: 2rem;

  background: linear-gradient(270deg, #66e2e2 0%, #d9e270 100%);
`;
