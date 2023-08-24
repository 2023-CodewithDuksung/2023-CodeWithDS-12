import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ConditionalSelectBox from './ConditionalSelectBox';
import ConditionalPlanList from './ConditionalPlanList';
import Infosrc from './../../img/Info_icon.svg';
import arrow_right from './../../img/arrow_right.svg';

export default function ConditionalContent() {
  const [isPTChecked, setIsPTChecked] = useState(false);
  const [isTeamChecked, setIsTeamChecked] = useState(false);
  const [isDebateChecked, setIsDebateChecked] = useState(false);
  const [selectedComplete, setSelectedComplete] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedPT, setSelectedPT] = useState('전체');
  const [selectedTeam, setSelectedTeam] = useState('전체');
  const [selectedDebate, setSelectedDebate] = useState('전체');
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [selectedScore, setSelectedScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);
  let responseSubjects;

  // function handlePTToggle() {
  //   setIsPTChecked((prevState) => !prevState);
  // }
  // function handleTeamToggle() {
  //   setIsTeamChecked((prevState) => !prevState);
  // }
  // function handleDebateToggle() {
  //   setIsDebateChecked((prevState) => !prevState);
  // }
  function handlePlanAdd(plan) {
    if (!selectedPlans.some((selectedPlan) => selectedPlan.subjectName === plan.subjectName)) {
      setSelectedScore((prevScore) => prevScore + parseInt(plan.score));
      setSelectedDifficulty((prevDifficulty) => prevDifficulty + parseInt(plan.difficulty));
      setSelectedPlans((prevPlans) => [...prevPlans, plan]);
    }
  }
  function handlePlanRemove(planToRemove) {
    setSelectedScore((prevScore) => prevScore - parseInt(planToRemove.score));
    setSelectedDifficulty((prevDifficulty) => prevDifficulty - parseInt(planToRemove.difficulty));
    setSelectedPlans((prevPlans) => prevPlans.filter((plan) => plan !== planToRemove));
  }

  const optionCompleteData = [
    { key: 1, value: '전공' },
    { key: 2, value: '교양' },
  ];
  const optionAreaData = [
    { key: 1, value: '컴퓨터공학전공' },
    { key: 2, value: 'IT미디어공학전공' },
    { key: 3, value: '사이버보안전공' },
    { key: 4, value: '소프트웨어전공' },
    { key: 5, value: '시각디자인전공' },
  ];

  const optionGradeData = [
    { key: 1, value: '2학년' },
    { key: 2, value: '3학년' },
    { key: 3, value: '4학년' },
  ];
  const optionPTData = [
    { key: 1, value: '전체' },
    { key: 2, value: '있음' },
    { key: 3, value: '없음' },
  ];
  const optionTeamData = [
    { key: 1, value: '전체' },
    { key: 2, value: '있음' },
    { key: 3, value: '없음' },
  ];
  const optionDebateData = [
    { key: 1, value: '전체' },
    { key: 2, value: '있음' },
    { key: 3, value: '없음' },
  ];

  function handleFetchData() {
    const queryParams = new URLSearchParams({
      subjectClassification: selectedComplete,
      major: selectedMajor,
      grade: selectedGrade,
      presentation: selectedPT,
      teamplay: selectedTeam,
      discussion: selectedDebate,
    });
    if (!selectedComplete || !selectedMajor || !selectedGrade) {
      alert('선택하지 않은 값이 있습니다.');
    } else {
      // console.log(`http://localhost:8080/duxby/smartschedule?${queryParams}`);

      fetch(`http://localhost:8080/duxby/smartschedule?${queryParams}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log('서버에서 받은 데이터:', responseJson);
          responseSubjects = responseJson.subject;
        })
        .catch((error) => {
          console.error('에러 발생:', error);
        });
    }
  }
  return (
    <ConditionalContentWrapper>
      <ConditionalOptionContianer>
        <ConditionalOptionWrapper>
          <ConditionalOptionBox>
            <ConditionalOption>이수 구분</ConditionalOption>
            <ConditionalSelectBox optionData={optionCompleteData} setSelectedValue={setSelectedComplete} />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ConditionalOption>전공/영역</ConditionalOption>
            <ConditionalSelectBox optionData={optionAreaData} setSelectedValue={setSelectedMajor} />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ConditionalOption>교과목수준</ConditionalOption>
            <ConditionalSelectBox optionData={optionGradeData} setSelectedValue={setSelectedGrade} />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ToggleName>발표</ToggleName>
            <ConditionalSelectBox optionData={optionPTData} setSelectedValue={setSelectedPT} />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ToggleName>팀플</ToggleName>
            <ConditionalSelectBox optionData={optionTeamData} setSelectedValue={setSelectedTeam} />
          </ConditionalOptionBox>
          <ConditionalOptionBox>
            <ToggleName>토의/토론</ToggleName>
            <ConditionalSelectBox optionData={optionDebateData} setSelectedValue={setSelectedDebate} />
          </ConditionalOptionBox>
        </ConditionalOptionWrapper>
        <ConditionalSubmit onClick={handleFetchData}>조회</ConditionalSubmit>
      </ConditionalOptionContianer>
      {responseSubjects && (
        <ConditionalPlanWrapper>
          <ConditionalPlanBox>
            {/* <ConditionalPlanHeaderContainer>
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
          </ConditionalPlanHeaderContainer> */}
            {responseSubjects &&
              responseSubjects.map((plan, index) => (
                <ConditionalPlanList
                  key={index}
                  plan={plan}
                  handlePlanAdd={handlePlanAdd}
                  selectedPlans={selectedPlans}
                  addMode={true}
                />
              ))}
          </ConditionalPlanBox>
          <img src={arrow_right} />
          <ConditionalPlanBox>
            <ConditionalPlanHeaderContainer>
              <ConditionalPlanHeaderWrapper>
                <ConditionalPlandetail>담은 학점</ConditionalPlandetail>
                <ToggleName2>{selectedScore}</ToggleName2>
              </ConditionalPlanHeaderWrapper>
              <ConditionalPlanHeaderWrapper>
                <ConditionalPlandetail>난이도</ConditionalPlandetail>
                <ToggleName2>
                  {selectedDifficulty > 10 ? (selectedDifficulty > 15 ? '힘듦' : '적정') : '쉬움'}
                </ToggleName2>
                <DifficultyDetail>
                  <li>어쩌구</li>
                  <li>점수의 총 합에 따라 해당 시간표의 쉬움 / 적정 / 힘듦의 난이도가 제공됩니다.</li>
                </DifficultyDetail>
              </ConditionalPlanHeaderWrapper>
            </ConditionalPlanHeaderContainer>
            {selectedPlans.map((plan, index) => (
              <ConditionalPlanList
                key={index}
                plan={plan}
                handlePlanRemove={handlePlanRemove}
                selectedPlans={selectedPlans}
                addMode={false}
              />
            ))}
          </ConditionalPlanBox>
        </ConditionalPlanWrapper>
      )}
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
  align-items: end;
  gap: 3rem;
  height: 17rem;
  padding: 4rem 3rem;
`;
const ConditionalOptionWrapper = styled.header`
  width: 85rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const ConditionalOptionBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
const ConditionalOption = styled.p`
  width: 8rem;
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
  background: #808080;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;

const ToggleName = styled.p`
  color: #22bcbc;
  width: 8rem;
  font-family: Noto Sans KR;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  text-align: right;
  line-height: normal;
`;
const ToggleName2 = styled.p`
  color: #22bcbc;
  font-family: Noto Sans KR;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  text-align: right;
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
  padding: 0.2rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ConditionalPlanHeaderContainer = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;
const ConditionalPlanHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80rem;
`;
const ConditionalPlandetail = styled.p`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DifficultyDetail = styled.ul`
  font-size: 0.1rem;
`;
