import React from 'react';
import { styled } from 'styled-components';

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <ProgressBarWrapper>
      <ProgressBarBox step={step} />
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
  width: ${({ step }) => step * (33.6 / 5)}rem;
  height: 2rem;

  background: linear-gradient(270deg, #d9e270 0%, #66e2e2 100%);
`;
