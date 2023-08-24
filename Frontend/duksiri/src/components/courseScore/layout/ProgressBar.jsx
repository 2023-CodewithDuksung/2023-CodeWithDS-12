import React from 'react';
import { styled } from 'styled-components';

export default function ProgressBar({ maxscore, nowscore }) {
  return (
    <ProgressBarWrapper>
      <ProgressBarBox nowscore={nowscore} maxscore={maxscore} />
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.section`
  width: 100%;
  height: 2rem;

  background-color: #eee;
`;

const ProgressBarBox = styled.article`
  /* width: ${({ step }) => step * (33.6 / 5)}rem; */
  width: ${({ nowscore, maxscore }) => 100 * ({ nowscore } / maxscore)}rem;
  height: 2rem;

  background: linear-gradient(270deg, #d9e270 0%, #66e2e2 100%);
`;
