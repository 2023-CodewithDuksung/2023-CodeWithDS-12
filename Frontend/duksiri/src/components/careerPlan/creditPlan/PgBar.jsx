import React from 'react';
import { styled } from 'styled-components';

export default function PgBar(props) {
  const { step } = props;

  let ratio1, ratio2, ratio3;

  if (step === 1) {
    ratio1 = 2;
    ratio2 = 2;
    ratio3 = 1;
  } else if (step === 2 || step === 3 || step === 4) {
    ratio1 = 2;
    ratio2 = 3;
    ratio3 = 1;
  } else {
    ratio1 = 1;
    ratio2 = 1;
    ratio3 = 1;
  }

  return (
    <PgBarWrapper>
      <PgBarBox step={ratio1} color="#EAF382" />
      <PgBarBox step={ratio2} color="#69E3E1" />
      <PgBarBox step={ratio3} color="#22BCBC" />
    </PgBarWrapper>
  );
}

const PgBarWrapper = styled.section`
  display: flex;
  width: 45%;
  height: 2rem;
`;

const PgBarBox = styled.div`
  flex: ${({ step }) => step};
  height: 100%;
  background-color: ${({ color }) => color};
`;