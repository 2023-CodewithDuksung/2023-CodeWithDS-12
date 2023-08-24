import React from 'react';
import { styled } from 'styled-components';
import ProgressBox from './layout/ProgressBox';
import BoxLayout from './layout/BoxLayout';
import { calcProgress } from '../../core/Progress';

export default function ElectiveClass({ userData }) {
  const progressscore = calcProgress(userData.gecredit, 36);
  console.log(progressscore);
  return (
    <ScoreBoxWrapper>
      <ProgressBox title="교양" nowscore={userData.gecredit} maxscore="36" progressscore={progressscore} />

      <TableBoxContainer>
        <BoxLayout width="20rem" height="7.5rem" color="black" size="2rem" weight="700" content="이수 학점" />
        <BoxLayout width="11.5rem" height="7.5rem" color="#22BCBC" size="1.6rem" weight="500" content="Y" />
        <BoxLayout
          width="30rem"
          height="7.5rem"
          color="#000000"
          size="1.6rem"
          weight="500"
          content="최소 이수학점 (36) 이수 완료"
        />

        <BoxLayout width="20rem" height="7.5rem" color="black" size="2rem" weight="700" content="이수 요건" />
        <BoxLayout width="11.5rem" height="7.5rem" color="#FF4646" size="1.6rem" weight="500" content="N" />
        <BoxLayout
          width="30rem"
          height="7.5rem"
          color="#FF4646"
          size="1.6rem"
          weight="500"
          content="학문의 융합 A1 영역 미수강"
        />
      </TableBoxContainer>
    </ScoreBoxWrapper>
  );
}

const ScoreBoxWrapper = styled.div`
  display: flex;

  width: 158rem;
`;

const TableBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 62rem;
  height: 15rem;
  margin: 0;
`;
