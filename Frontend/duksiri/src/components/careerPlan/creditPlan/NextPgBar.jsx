import React from 'react';
import { styled } from 'styled-components';

export default function NewProcessBar(props) {
  const { step } = props;

  let firstColor = "#EAF382";
  let secondColor = "#69E3E1";

  if (step === 2) {
    firstColor = secondColor = "#d9d9d9";
  } else if(step === 3) {
    firstColor = secondColor = "#d9d9d9";
  } else if(step === 4) {
    firstColor = secondColor = "#d9d9d9";
  }

  return (
    <NewProcessBarWrapper>
      <NewProcessBarBox step={step} color={firstColor} />
      <NewProcessBarBox step={step} color={secondColor} />
    </NewProcessBarWrapper>
  );
}

const NewProcessBarWrapper = styled.section`
  display: flex;
  width: 45%;
  height: 2rem;
  margin-left: 0.7rem;
`;

const NewProcessBarBox = styled.div`
  flex: ${({ step }) => step};
  height: 100%;
  background-color: ${({ color }) => color};
`;