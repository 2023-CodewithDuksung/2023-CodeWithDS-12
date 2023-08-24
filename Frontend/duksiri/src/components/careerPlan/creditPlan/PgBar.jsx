import React from 'react';
import { styled } from 'styled-components';

export default function PgBar(props) {
  const { step } = props;

  return (
    <PgBarWrapper>
      <PgBarBox step={step * 0.5} color="#EAF382" />
      <PgBarBox step={step * 0.5} color="#69E3E1" />
      <PgBarBox step={step * 0.25} color="#22BCBC" />
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