import { styled } from 'styled-components';
import ProgressBar from './ProgressBar';

export default function ProgressBox({ step }) {
  return (
    <BoxWrapper>
      <TitleWrapper>
        <TitleContainer>
          <MajorNum>1전공</MajorNum>
          <MajorName>IT 미디어 공학</MajorName>
        </TitleContainer>
        <CourseNum>18/36</CourseNum>
      </TitleWrapper>
      <ProgressBar step={6} />
      <ToggleText> 상세 내역 보기 </ToggleText>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;

  background-color: #fff;
  padding: 3.2rem 2.3rem 0rem 3.4rem;
  margin-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

const MajorNum = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 2.7rem;
  margin-left: 0.6rem;
`;

const MajorName = styled.h1`
  font-size: 2rem;
  color: #7a68ae;
  font-weight: 700;
`;

const CourseNum = styled.h1`
  font-size: 2rem;
  color: #858585;
  font-weight: 700;
  margin-right: 1.2rem;
`;

const ToggleText = styled.h6`
  color: #000;
  font-size: 1.2rem;
  font-weight: 400;
`;
