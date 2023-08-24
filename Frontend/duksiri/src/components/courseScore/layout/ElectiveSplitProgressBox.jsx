import { styled } from 'styled-components';
import { USER_DATA } from '../../../core/mockCourseScore';
import { useEffect } from 'react';

export default function ElectiveSplitProgressBox({
  nowscore,
  title,
  majorname,
  maxscore,
  progressscore,
  lefta,
  leftb,
}) {
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
        <ProgressBarBox progressscore={progressscore}>
          <SplitLineA lefta={lefta} />
          <SplitLineB leftb={leftb} />
        </ProgressBarBox>
      </ProgressBarWrapper>
      <SubjectName>
        <span>학문의 기초 (15)</span>
        <span>학문의 융합 (21)</span>
        <span>자기설계•개발 (6)</span>
      </SubjectName>
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

  color: #000;
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
  display: flex;

  width: 100%;
  height: 2rem;

  background-color: #eee;
`;

const ProgressBarBox = styled.article`
  display: flex;

  width: ${(props) => props.progressscore}%;
  height: 2rem;

  background: linear-gradient(270deg, #66e2e2 0%, #d9e270 100%);
`;

const SplitLineA = styled.div`
  /* border-color: #eee; */
  position: relative;
  left: ${({ lefta }) => lefta}rem;

  height: 500px;
  height: 100%;

  border-left: 0.5rem solid #eee;
`;

const SplitLineB = styled.div`
  /* border-color: #eee; */
  position: relative;
  left: ${({ leftb }) => leftb}rem;

  height: 500px;
  height: 100%;

  border-left: 0.5rem solid #eee;
`;

const SubjectName = styled.div`
  position: relative;

  margin-top: 0.5rem;

  color: #bbb;
  font-weight: 500;
  font-size: 1.6rem;

  :first-child {
    margin-left: 9rem;
  }

  :nth-child(2) {
    margin-left: 27rem;
  }

  :nth-child(3) {
    margin-left: 11rem;
  }
`;