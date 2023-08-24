import { styled } from 'styled-components';
import { USER_DATA } from '../../../core/mockCourseScore';
import { useEffect } from 'react';

export default function SplitProgressBox({ nowscore, title, majorname, maxscore, progressscore, lefta, leftb, leftc }) {
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
          <SplitLineC leftc={leftc} />
        </ProgressBarBox>
      </ProgressBarWrapper>
      <SubjectName>
        <span>교양 (42)</span>
        <span>전탐 (42)</span>
        <span>1전공 (42)</span>
        <span>2전공 (21)</span>
      </SubjectName>
      <ToggleText> 상세 내역 보기 </ToggleText>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.article`
  display: flex;
  flex-direction: column;

  /* width: 86rem; */

  width: 148rem;
  height: 15rem;
  padding: 3.2rem 2.3rem 0 3.4rem;
  margin-bottom: 3rem;

  border: 1px solid #bbb;
  background-color: #fff;

  /* background-color: red; */
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
  display: flex;

  width: 100%;
  height: 2rem;

  background-color: #eee;
`;

const ProgressBarBox = styled.article`
  display: flex;

  width: 67%;
  height: 2rem;

  /* width: ${({ step }) => step * (33.6 / 5)}rem; */

  /* width: ${({ progressscore }) => {
    progressscore;
  }}%; */

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

const SplitLineC = styled.div`
  /* border-color: #eee; */
  position: relative;
  left: ${({ leftc }) => leftc}rem;

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
    margin-left: 12rem;
  }

  :nth-child(2) {
    margin-left: 17.5rem;
  }

  :nth-child(3) {
    margin-left: 10rem;
  }

  :last-child {
    margin-left: 19rem;
  }
`;
