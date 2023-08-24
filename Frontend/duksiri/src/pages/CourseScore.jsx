import React, { useState } from 'react';
import { styled } from 'styled-components';
import ElectiveClass from '../components/courseScore/ElectiveClass';
import FirstMajor from '../components/courseScore/FirstMajor';
import { USER_DATA } from '../core/mockCourseScore';
import SecondMajor from '../components/courseScore/SecondMajor';
import { UnderTriangle } from '../assets';
import GraduateComponent from '../components/courseScore/GraduateComponent';

export default function CourseScore() {
  const userData = USER_DATA.persondata;
  const [isOpen, setIsOpen] = useState(true);

  function handleClickToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <CourseWrapper>
      <Title>이수 내역</Title>
      <BoxContainer>
        <GraduateComponent userData={userData} />
        <IconWrapper isopen={isOpen} onClick={handleClickToggle}>
          <UnderTriangleIcon />
        </IconWrapper>
        {isOpen && (
          <>
            <ElectiveClass userData={userData} />
            <FirstMajor userData={userData} />
            <SecondMajor userData={userData} />
          </>
        )}
      </BoxContainer>
    </CourseWrapper>
  );
}

const CourseWrapper = styled.main`
  padding-top: 5rem;
  padding-left: 5rem;
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
const IconWrapper = styled.button`
  display: flex;
  justify-content: center;

  width: ${(props) => props.progressscore}%;

  /* transition: ease 1s; */

  transform: ${({ isopen }) => isopen && 'rotate(180deg)'};

  margin: 2.7rem;
`;
const UnderTriangleIcon = styled(UnderTriangle)`
  width: 3rem;
  height: 1%.5;
`;
