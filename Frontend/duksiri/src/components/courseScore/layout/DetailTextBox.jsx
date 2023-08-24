import React from 'react';
import { styled } from 'styled-components';
import BoxLayout from './BoxLayout';

export default function DetailTextBox() {
  return (
    <BoxWrapper>
      <BoxContainer></BoxContainer>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  /* background-color: #f4f4f4; */
  background-color: beige;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 62rem;
  height: 100%;

  border: 1px solid #bbb;

  text-align: center;
`;
