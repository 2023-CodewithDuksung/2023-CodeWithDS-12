import React from 'react';
import { styled } from 'styled-components';
import ProgressBox from './layout/ProgressBox';

export default function ScoreBox() {
  const userData = USER_DATA.persondata;
  const majorData = USER_DATA;
  console.log(majorData);
  return <ScoreBoxWrapper></ScoreBoxWrapper>;
}

const ScoreBoxWrapper = styled.div`
  display: flex;
`;
