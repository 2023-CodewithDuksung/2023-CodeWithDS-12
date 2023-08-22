import React from 'react';
import ProgressBox from '../components/careerPlan/ProgressBox';
import { styled } from 'styled-components';

export default function CourseScore() {
  return (
    <CourseWrapper>
      <Title>Title</Title>
      <BoxContainer>
        <ProgressBox />
        <TestMiniBox />
        <ProgressBox />
        <TestMiniBox />
      </BoxContainer>
    </CourseWrapper>
  );
}

const CourseWrapper = styled.main`
  padding: 5rem 5rem;
  /* background: #f7f9fa; */
  background: yellow;
`;
const Title = styled.h1`
  margin-bottom: 5.7rem;
  font-size: 3rem;
  color: #000;
  font-weight: 700;
`;

const BoxContainer = styled.article`
  display: grid;

  grid-template-columns: 2fr 1fr;
`;

const TestMiniBox = styled.div`
  /* width: 60rem; */
  height: 15rem;
  flex-shrink: 0;
  background-color: beige;
  margin-left: 3rem;
  margin-bottom: 3rem;
`;
