import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ConditionalSelectBox from '../components/conditionalPan/ConditionalSelectBox';
import ConditionalPlanList from '../components/conditionalPan/ConditionalPlanList';
import arrow_right from './../img/arrow_right.svg';
import axios from 'axios';

export default function ConditionalContent() {
  const [selectedComplete, setSelectedComplete] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [selectedPT, setSelectedPT] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(true);
  const [selectedDebate, setSelectedDebate] = useState(true);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [selectedScore, setSelectedScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);
  let responseSubjects, dummyDataWithTime;

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
    if (!selectedPlans.some((selectedPlan) => selectedPlan.subject_name === plan.subject_name)) {
      setSelectedScore((prevScore) => prevScore + parseInt(plan.credit));
      setSelectedDifficulty((prevDifficulty) => prevDifficulty + parseInt(plan.subject_difficulty));
      setSelectedPlans((prevPlans) => [...prevPlans, plan]);
    }
  }
  function handlePlanRemove(planToRemove) {
    setSelectedScore((prevScore) => prevScore - parseInt(planToRemove.credit));
    setSelectedDifficulty((prevDifficulty) => prevDifficulty - parseInt(planToRemove.subject_difficulty));
    setSelectedPlans((prevPlans) => prevPlans.filter((plan) => plan !== planToRemove));
  }
  const timeList = [
    '화C/차137, 목E/차137',
    '화B/차137, 월A/차137',
    '화C/차137, 목E/차137',
    '수D/차137, 금F/차137',
    '화C/차337, 목H/차137',
    '화I/차137, 금J/차137',
    '월K/차137, 목L/차137',
    '화M/차137, 수N/차137',
    '월O/차137, 금P/차137',
    '수Q/차137, 목R/차137',
    '월S/차137, 금T/차137',
    '화C/차137, 목E/차137',
    '화B/차137, 월A/차137',
    '수D/차137, 금F/차137',
    '수G/차137, 목H/차137',
    '화I/차137, 금J/차137',
    '월K/차137, 목L/차137',
    '화M/차137, 수N/차137',
    '월O/차137, 금P/차137',
    '수Q/차137, 목R/차137',
    '월S/차137, 금T/차137',
  ];

  const dummyData = [
    {
      subject_code: '004745',
      year: 2023,
      grade: '3',
      discussion: 0,
      geclassification: '',
      presentation: 0,
      major: '컴퓨터공학전공',
      team_play: 0,
      subject_classification: '전선',
      subject_hour: 0,
      subject_rating: 3.45,
      subject_name: '멀티미디어프로그래밍',
      semester: 2,
      credit: 8,
      professor: '이경미',
      subject_difficulty: 4.0,
    },
    {
      subject_code: '004747',
      year: 2023,
      grade: '3',
      subject_rating: 2.9,
      discussion: 0,
      professor: '이주영',
      geclassification: '',
      presentation: 0,
      major: '컴퓨터공학전공',
      team_play: 0,
      subject_classification: '전선',
      subject_hour: 0,
      subject_name: '알고리즘',
      semester: 2,
      credit: 20,
      subject_difficulty: 4.0,
    },
    {
      year: 2023,
      grade: '3',
      professor: '박우창',
      discussion: 0,
      subject_name: '데이터베이스프로그래밍',
      geclassification: '',
      subject_rating: 3.09,
      presentation: 0,
      major: '컴퓨터공학전공',
      team_play: 0,
      subject_classification: '전선',
      subject_hour: 0,
      semester: 2,
      subject_code: '004750',
      credit: 3,
      subject_difficulty: 4.0,
    },
    {
      subject_name: '모바일앱프로그래밍',
      year: 2023,
      grade: '3',
      subject_rating: 4.0,
      subject_code: '005425',
      discussion: 0,
      geclassification: '',
      subject_difficulty: 4.5,
      presentation: 0,
      major: '컴퓨터공학전공',
      team_play: 0,
      subject_classification: '전선',
      subject_hour: 0,
      semester: 1,
      credit: 3,
      professor: '이경미',
    },
  ];

  const optionCompleteData = [
    { key: 1, text: '전공', value: '전공' },
    { key: 2, text: '교양', value: '교양' },
  ];
  const optionAreaData = [
    { key: 1, text: '컴퓨터공학전공', value: '컴퓨터공학전공' },
    { key: 2, text: 'IT미디어공학전공', value: 'IT미디어공학전공' },
    { key: 3, text: '사이버보안전공', value: '사이버보안전공' },
    { key: 4, text: '소프트웨어전공', value: '소프트웨어전공' },
    { key: 5, text: '시각디자인전공', value: '시각디자인전공' },
  ];

  const optionGradeData = [
    { key: 1, text: '2학년', value: 2 },
    { key: 2, text: '3학년', value: 3 },
    { key: 3, text: '4학년', value: 4 },
  ];
  const optionPTData = [
    { key: 1, text: '전체', value: true },
    { key: 2, text: '있음', value: true },
    { key: 3, text: '없음', value: false },
  ];
  const optionTeamData = [
    { key: 1, text: '전체', value: true },
    { key: 2, text: '있음', value: true },
    { key: 3, text: '없음', value: false },
  ];
  const optionDebateData = [
    { key: 1, text: '전체', value: true },
    { key: 2, text: '있음', value: true },
    { key: 3, text: '없음', value: false },
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

      axios
        .get(`http://localhost:8080/duxby/smartschedule?${queryParams}`)
        .then((response) => {
          console.log('서버에서 받은 데이터:', response.data);
          responseSubjects = response.data.subject;
        })
        .catch((error) => {
          console.error('에러 발생:', error);
        });
    }
  }
  dummyDataWithTime = dummyData.map((data, index) => ({
    ...data,
    subject_time: timeList[index],
  }));
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
      {dummyDataWithTime && (
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
            {dummyDataWithTime &&
              dummyDataWithTime.map((plan, index) => (
                <ConditionalPlanList
                  key={index}
                  plan={plan}
                  handlePlanAdd={handlePlanAdd}
                  selectedPlans={selectedPlans}
                  selectedScore={selectedScore}
                  subjectTime={timeList[index]}
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
