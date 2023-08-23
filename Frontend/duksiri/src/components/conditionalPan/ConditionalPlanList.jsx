import React from 'react';
import { styled } from 'styled-components';

export default function ConditionalPlanList({ plan, handlePlanAdd, handlePlanRemove, addMode }) {
  const handleActionClick = () => {
    if (addMode) {
      handlePlanAdd(plan);
    } else {
      handlePlanRemove(plan);
    }
  };

  return (
    <PlanListContainer>
      <PlanHeader>
        <PlanTitle>{plan.title}</PlanTitle>
        <PlanProfessor>{plan.professor}</PlanProfessor>
        <PlanTime>{plan.time}</PlanTime>
      </PlanHeader>
      <PlanButton onClick={handleActionClick}>{addMode ? '담기' : '빼기'}</PlanButton>
    </PlanListContainer>
  );
}

const PlanListContainer = styled.div`
  height: 10rem;
  background-color: #fff;

  padding: 2rem;
  margin: 1rem;

  position: relative;
`;
const PlanHeader = styled.div`
  display: flex;
  justify-content: start;
  gap: 1.2rem;
`;
const PlanTitle = styled.p`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const PlanProfessor = styled.p`
  color: #bbb;
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PlanTime = styled.p`
  color: #bbb;
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PlanButton = styled.div`
  background-color: #eaf382;
  width: 8rem;
  height: 3.5rem;
  margin: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  position: absolute;
  bottom: 0rem;
  right: 0rem;

  cursor: pointer;
`;
