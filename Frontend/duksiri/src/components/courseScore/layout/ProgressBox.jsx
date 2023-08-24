import { styled } from 'styled-components';
import { USER_DATA } from '../../../core/mockCourseScore';
import { useEffect } from 'react';

export default function ProgressBox({ nowscore, title, majorname, maxscore, progressscore }) {
  // useEffect(() => {
  //   // const
  //   console.log(progressscore);
  // }, []);
  return (
    <BoxWrapper>
      <TitleWrapper>
        <TitleContainer>
          <Title>{title}</Title>
          <MajorName>{majorname}</MajorName>
        </TitleContainer>
        <CourseNum>
          {nowscore} / {maxscore}
        </CourseNum>
      </TitleWrapper>
      <ProgressBarWrapper>
        <ProgressBarBox progressscore={progressscore} />
      </ProgressBarWrapper>
      <ToggleText> 상세 내역 보기 </ToggleText>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 86rem;
  height: 15rem;
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
  color: #7a68ae;
  font-weight: 700;
  font-size: 2rem;
`;

const CourseNum = styled.h1`
  margin-right: 1.2rem;

  color: #858585;
  font-weight: 700;
  font-size: 2rem;
`;

const ToggleText = styled.h6`
  display: flex;
  justify-content: flex-end;

  margin-top: 3.5rem;

  color: #000;
  font-weight: 400;
  font-size: 1.2rem;
  align-content: end;
`;

const ProgressBarWrapper = styled.section`
  width: 100%;
  height: 2rem;

  background-color: #eee;
`;

const ProgressBarBox = styled.article`
  /* width: ${({ step }) => step * (33.6 / 5)}rem; */
  width: ${({ progressscore }) => {
    progressscore;
  }}%;
  height: 2rem;

  background: linear-gradient(270deg, #d9e270 0%, #66e2e2 100%);
`;
