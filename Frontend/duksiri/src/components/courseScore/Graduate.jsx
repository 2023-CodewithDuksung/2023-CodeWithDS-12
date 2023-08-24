import React from 'react';
import { styled } from 'styled-components';
import BoxLayout from './layout/BoxLayout';
import ProgressBox from './layout/ProgressBox';
import SplitProgressBox from './layout/SplitProgressBox';
import { calcProgress } from '../../core/Progress';

export default function Graduate({ userData }) {
  const progressscore = calcProgress(userData.totalCredit, 130);
  const electivescore = calcProgress(userData.gecredit, 130);
  const basemajor = calcProgress(userData.baseMajorCredit, 130) + electivescore; //전탐
  const firstmajor = calcProgress(userData.firstMajorCredit, 130) + basemajor; //1전공
  const secondmajor = calcProgress(userData.secondMajorCredit, 130) + firstmajor; //2전공

  return (
    <ScoreBoxWrapper>
      <TableBoxContainer>
        <SplitProgressBox
          title="졸업학점"
          //   majorname={userData.userFirstMajor}
          nowscore={userData.totalCredit}
          maxscore="130"
          progressscore={progressscore}
          lefta={electivescore}
          leftb={basemajor}
          leftc={secondmajor}
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
