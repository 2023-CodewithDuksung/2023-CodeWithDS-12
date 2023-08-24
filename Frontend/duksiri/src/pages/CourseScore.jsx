import React from 'react';
import { styled } from 'styled-components';
import ElectiveClass from '../components/courseScore/ElectiveClass';
import FirstMajor from '../components/courseScore/FirstMajor';
import { USER_DATA } from '../core/mockCourseScore';

export default function CourseScore() {
  const userData = USER_DATA.persondata;
  return (
    <CourseWrapper>
      <Title>이수 내역</Title>
      <BoxContainer>
        <ElectiveClass userData={userData} />
        <FirstMajor userData={userData} />
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
  display: flex;
  flex-direction: column;
`;
