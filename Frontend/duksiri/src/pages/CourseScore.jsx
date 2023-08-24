import React from 'react';
import ProgressBox from '../components/courseScore/ProgressBox';
import { styled } from 'styled-components';

export default function CourseScore() {
  return (
    <CourseWrapper>
      <Title>이수 내역</Title>
      <BoxContainer>
        <ProgressBox />
        {/* <TestMiniBox /> */}
        <ProgressBox />
        {/* <TestMiniBox /> */}
      </BoxContainer>
    </CourseWrapper>
  );
}

const CourseWrapper = styled.main`
  padding: 5rem;
`;
const Title = styled.h1`
  margin-bottom: 3rem;

  color: #22bcbc;
  font-weight: 700;
  font-size: 3rem;
`;

const BoxContainer = styled.article`
  display: grid;

  grid-template-columns: 2fr 1fr;
`;

// 테스트용으로 삭제될 애
const TestMiniBox = styled.div`
  height: 15rem;
  margin-bottom: 3rem;
  margin-left: 3rem;

  background-color: beige;
  flex-shrink: 0;
`;
