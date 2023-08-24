import React from 'react';
import { styled } from 'styled-components';
import BoxLayout from './layout/BoxLayout';
import ProgressBox from './layout/ProgressBox';
import { calcProgress } from '../../core/Progress';

export default function SecondMajor({ userData }) {
  const progressscore = calcProgress(userData.secondMajorCredit, 36);
  const leftScore = 36 - userData.secondMajorCredit;
  return (
    <ScoreBoxWrapper>
      <ProgressBox
        title="2전공"
        majorname={userData.userSecondMajor}
        nowscore={userData.secondMajorCredit}
        maxscore="36"
        progressscore={progressscore}
        majorcolor="#F16D9A"
      />

      <TableBoxContainer>
        <BoxLayout
          width="40rem"
          height="15rem"
          color="black"
          size="2rem"
          weight="700"
          content="남은학점"
          subcontent={leftScore}
        />
        <SubTableContainer>
          <BoxLayout
            width="11.5rem"
            height="7.5rem"
            color="black"
            size="1.6rem"
            weight="500"
            content="필수"
            subcontent="6"
          />
          <BoxLayout
            width="30rem"
            height="7.5rem"
            color="#000000"
            size="1.6rem"
            weight="500"
            content="졸업 전시 관련 과목 2개"
          />
          <BoxLayout
            width="11.5rem"
            height="7.5rem"
            color="black"
            size="1.6rem"
            weight="500"
            content="선택"
            subcontent="9"
          />
          <BoxLayout width="30rem" height="7.5rem" color="#FF4646" size="1.6rem" weight="500" content="" />
        </SubTableContainer>
      </TableBoxContainer>
    </ScoreBoxWrapper>
  );
}
const ScoreBoxWrapper = styled.div`
  display: flex;

  width: 150rem;
`;

const TableBoxContainer = styled.div`
  display: flex;

  width: 62rem;
  height: 15rem;
  margin: 0;
`;

const SubTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
