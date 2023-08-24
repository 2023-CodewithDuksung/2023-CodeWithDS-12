import React from 'react';
import { styled } from 'styled-components';
import ProgressBox from './layout/ProgressBox';

export default function ScoreBox() {
  return (
    <ScoreBoxWrapper>
      <ProgressBox />
    </ScoreBoxWrapper>
  );
}

const ScoreBoxWrapper = styled.div`
  display: flex;
`;
