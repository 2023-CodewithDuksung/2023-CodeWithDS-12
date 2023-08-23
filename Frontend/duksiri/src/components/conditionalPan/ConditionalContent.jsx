import React, { useState } from 'react';
import { styled } from 'styled-components';
import ConditionalSelectBox from './ConditionalSelectBox';
import ConditionalPlanList from './ConditionalPlanList';

export default function ConditionalContent() {
  const [isPTChecked, setIsPTChecked] = useState(false);
  const [isTeamChecked, setIsTeamChecked] = useState(false);
  const [isDebateChecked, setIsDebateChecked] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState([]);

  function handlePTToggle() {
    setIsPTChecked((prevState) => !prevState);
  }
  function handleTeamToggle() {
    setIsTeamChecked((prevState) => !prevState);
  }
  function handleDebateToggle() {
    setIsDebateChecked((prevState) => !prevState);
  }
  function handlePlanAdd(plan) {
    if (!selectedPlans.some((selectedPlan) => selectedPlan.title === plan.title)) {
      setSelectedPlans((prevPlans) => [...prevPlans, plan]);
    }
  }
  function handlePlanRemove(planToRemove) {
    setSelectedPlans((prevPlans) => prevPlans.filter((plan) => plan !== planToRemove));
  }

  // 더미 데이터
  const dummyPlans = [
    { title: '강의명 1', professor: '교수 1', time: '시간 1' },
    { title: '강의명 2', professor: '교수 2', time: '시간 2' },
    { title: '강의명 3', professor: '교수 3', time: '시간 3' },
  ];

  return (
    <ConditionalContentWrapper>
      <ConditionalOptionContianer>
        <ConditionalOptionWrapper>
          <ConditionalOptionBox>
            <ConditionalOption>이수 구분</ConditionalOption>
            <ConditionalSelectBox />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ConditionalOption>전공/영역</ConditionalOption>
            <ConditionalSelectBox />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ConditionalOption>학년</ConditionalOption>
            <ConditionalSelectBox />
          </ConditionalOptionBox>
        </ConditionalOptionWrapper>
        <ConditionalSubmit>조회</ConditionalSubmit>
      </ConditionalOptionContianer>
      <ConditionalPlanWrapper>
        <ConditionalPlanBox>
          <ConditionalPlanHeader>
            <ToggleName>발표 제외</ToggleName>
            <ToggleSwitchWrapper>
              <ToggleInput checked={isPTChecked} onChange={handlePTToggle} />
              <ToggleSlider />
            </ToggleSwitchWrapper>
            <ToggleName>팀플 제외</ToggleName>
            <ToggleSwitchWrapper>
              <ToggleInput checked={isTeamChecked} onChange={handleTeamToggle} />
              <ToggleSlider />
            </ToggleSwitchWrapper>
            <ToggleName>토의/토론 제외</ToggleName>
            <ToggleSwitchWrapper>
              <ToggleInput checked={isDebateChecked} onChange={handleDebateToggle} />
              <ToggleSlider />
            </ToggleSwitchWrapper>
          </ConditionalPlanHeader>
          {dummyPlans.map((plan, index) => (
            <ConditionalPlanList key={index} plan={plan} handlePlanAdd={handlePlanAdd} addMode={true} />
          ))}
        </ConditionalPlanBox>
        <ConditionalPlanBox>
          <ConditionalPlanHeader></ConditionalPlanHeader>
          {selectedPlans.map((plan, index) => (
            <ConditionalPlanList key={index} plan={plan} handlePlanRemove={handlePlanRemove} addMode={false} />
          ))}
        </ConditionalPlanBox>
      </ConditionalPlanWrapper>
    </ConditionalContentWrapper>
  );
}

const ConditionalContentWrapper = styled.div`
  padding: 5rem 0;
`;
const ConditionalOptionContianer = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.5rem;
  height: 8.7rem;
  padding: 3rem;
`;
const ConditionalOptionWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
const ConditionalOptionBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const ConditionalOption = styled.p`
  color: #bbb;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ConditionalSubmit = styled.div`
  width: 6rem;
  height: 4rem;
  border-radius: 10px;
  border: 2px solid #bbb;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ToggleName = styled.p`
  color: #22bcbc;
  font-family: Noto Sans KR;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 12px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #808080;
    border-radius: 50%;
    left: 0px;
    top: -1px;
    transition: 0.4s;
  }
`;

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    &::before {
      background-color: #22bcbc;
      transform: translateX(25px);
    }
  }
`;
const ConditionalPlanWrapper = styled.section`
  margin-top: 3rem;

  display: flex;
  justify-content: space-between;
`;
const ConditionalPlanBox = styled.article`
  width: 48rem;
  height: 62rem;
  background: #eee;

  padding: 1rem;
`;
const ConditionalPlanHeader = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
