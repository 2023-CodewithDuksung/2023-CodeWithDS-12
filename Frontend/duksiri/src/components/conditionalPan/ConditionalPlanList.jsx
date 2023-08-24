import React from 'react';
import { styled } from 'styled-components';

export default function ConditionalPlanList({ plan, selectedPlans, handlePlanAdd, handlePlanRemove, addMode }) {
  const isPlanSelected = selectedPlans?.some((selectedPlan) => selectedPlan.subjectName === plan.subjectName);
  const handleActionClick = () => {
    if (addMode) {
      handlePlanAdd(plan);
      console.log('추가요');
    } else {
      handlePlanRemove(plan);
    }
  };
  console.log();
  return (
    <PlanListContainer>
      <PlanTitle>{plan.subjectName}</PlanTitle>
      <PlanHeader>
        <PlanProfessor>{plan.professor}</PlanProfessor>
        <PlanTime>{plan.subjectTime}</PlanTime>
      </PlanHeader>
      <PlanPre>선수과목</PlanPre>
      <PlanButton onClick={handleActionClick} isPlanSelected={isPlanSelected} addMode={addMode}>
        {addMode ? '담기' : '빼기'}
      </PlanButton>
    </PlanListContainer>
  );
}

const PlanListContainer = styled.div`
  height: 10rem;
  background-color: #fff;

  padding: 2rem;
  margin: 0.5rem;

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
  margin-bottom: 0.5rem;
`;
const PlanProfessor = styled.p`
  color: #bbb;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PlanTime = styled.p`
  color: #bbb;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PlanPre = styled.p`
  color: #ff4646;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const PlanButton = styled.div`
  background-color: ${(props) => (props.isPlanSelected && props.addMode ? '#bbb' : '#eaf382')};

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
  bottom: -0.5rem;
  right: 0rem;

  cursor: pointer;
`;
