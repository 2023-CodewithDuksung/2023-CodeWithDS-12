import React from 'react';
import { styled } from 'styled-components';
import BoxLayout from './layout/BoxLayout';
import ProgressBox from './layout/ProgressBox';
import SplitProgressBox from './layout/SplitProgressBox';
import { calcProgress } from '../../core/Progress';

export default function Graduate({ userData }) {
  const progressscore = calcProgress(userData.totalCredit, 130);
  const electivescore = calcProgress(userData.gecredit, 99);
  const basemajor = calcProgress(userData.baseMajorCredit + userData.gecredit, 99); //전탐
  const firstmajor = calcProgress(userData.firstMajorCredit + userData.baseMajorCredit + userData.gecredit, 99); //1전공

  return (
    <ScoreBoxWrapper>
      <TableBoxContainer>
        <SplitProgressBox
          title="졸업학점"
          nowscore={userData.totalCredit}
          maxscore="130"
          progressscore={progressscore}
          lefta={electivescore}
          leftb={basemajor}
          leftc={firstmajor}
        />
      </TableBoxContainer>
    </ScoreBoxWrapper>
  );
}
const ScoreBoxWrapper = styled.div`
  display: flex;

  margin-bottom: 7rem;
`;

const TableBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: 15rem;
  margin: 0;
`;
