import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

export default function SideInformation() {
  let responsePersondata, totalCredit;
  const persondata = {
    userStudentNumber: '20210685',
    userName: '김덕성',
    userFirstMajor: '컴퓨터공학전공',
    userSecondMajor: '시각디자인전공',
    firstMajorHard: false,
    secondMajorHard: false,
    requiredCourseCredit: 15,
    a1Credit: 5,
    a2Credit: 5,
    a3Credit: 6,
    selfDesignCredit: 5,
    baseMajorCredit: 15,
    firstMajorCredit: 24,
    secondMajorCredit: 18,
    restCredit: 31,
    restSemester: 3,
    semester: 5,
    totalCredit: 99,
    gradePointAverage: 3.8,
    teamPlay: false,
    presentation: true,
    discussion: false,
    bcredit: 9,
    ccredit: 3,
    gecredit: 42,
  };
  totalCredit =
    persondata.GECredit + persondata.setBaseMajorCredit + persondata.firstMajorCredit + persondata.secondMajorCredit;
  // useEffect(() => {
  //   fetch('http://localhost:8080/duxby/smartschedule')
  //     .then((response) => response.json())
  //     .then((infoData) => {
  //       console.log(infoData);
  //       responsePersondata = responseJson.persondata;
  //       totalCredit =
  //         responsePersondata.GECredit +
  //         responsePersondata.setBaseMajorCredit +
  //         responsePersondata.firstMajorCredit +
  //         responsePersondata.secondMajorCredit;
  //     })
  //     .catch((error) => {
  //       console.error('에러 발생:', error);
  //     });
  // }, []);

  return (
    <SideWrapper>
      <InfoTitle>학적정보 요약</InfoTitle>
      <InfoTable>
        <InfoTh>학번</InfoTh>
        <InfoTd>{persondata && persondata.userStudentNumber}</InfoTd>
        <tr></tr>
        <InfoTh>성명</InfoTh>
        <InfoTd>{persondata && persondata.userName}</InfoTd>
        <tr></tr>
        <InfoTh>수강학년(학기)</InfoTh>
        <InfoTd>
          {persondata && Math.ceil(persondata.semester / 2)}학년
          {persondata && persondata.semester % 2 === 1 ? '1학기' : '2학기'} ({persondata && persondata.semester}학기){' '}
        </InfoTd>
        <tr></tr>
        <tr>
          <InfoTh rowSpan={2}>전공</InfoTh>
          <InfoTd>1전공 {persondata && persondata.userFirstMajor}</InfoTd>
        </tr>
        <InfoTd>2전공 {persondata && persondata.userSecondMajor}</InfoTd>
      </InfoTable>
      <InfoTitle>이수내역 요약</InfoTitle>
      <InfoTable>
        <InfoTh>졸업학점</InfoTh>
        <InfoTd>
          {persondata && persondata.totalCredit}/130<tr></tr>(남은 학점 : {persondata && persondata.restCredit})
        </InfoTd>
        <tr></tr>
        <InfoTh>교양</InfoTh>
        <InfoTd>
          <InfoTd>
            {persondata && persondata.userStudentNumber < 20210000
              ? (persondata && persondata.a1Credit >= 3 ? 1 : 0) +
                  (persondata && persondata.a2Credit >= 3 ? 1 : 0) +
                  (persondata && persondata.a3Credit >= 3 ? 1 : 0) >=
                2
                ? ''
                : (persondata && persondata.a1Credit < 3 ? 'A1영역 미이수 ' : '') +
                  (persondata && persondata.a2Credit < 3 ? 'A2영역 미이수' : '') +
                  (persondata && persondata.a3Credit < 3 ? 'A3영역 미이수 ' : '')
              : (persondata && persondata.a1Credit < 3 ? 'A1영역 미이수 ' : '') +
                (persondata && persondata.a2Credit < 3 ? 'A2영역 미이수' : '') +
                (persondata && persondata.a3Credit < 3 ? 'A3영역 미이수' : '')}
            {persondata && persondata.bcredit < 3 ? 'B영역 미이수 ' : ''}
            {persondata && persondata.bcredit < 3 ? 'C영역 미이수' : ''}
            {persondata && persondata.selfDesignCredit < 6 ? '자기설계 미이수 ' : ''}
          </InfoTd>
        </InfoTd>
        <tr></tr>
        <InfoTh>전탐</InfoTh>
        <InfoTd>
          {persondata && persondata.userStudentNumber < 20200000
            ? '해당사항 없음'
            : persondata && persondata.baseMajorCredit >= 12
            ? '이수 완료'
            : `남은학점: ${12 - persondata && persondata.baseMajorCredit}`}
        </InfoTd>
        <tr></tr>
        <InfoTh>1전공</InfoTh>
        <InfoTd>
          {persondata && persondata.firstMajorCredit}/36<br></br>(남은 학점:
          {36 - (persondata && persondata.firstMajorCredit)})
        </InfoTd>
        <tr></tr>
        <InfoTh>2전공</InfoTh>
        <InfoTd>
          {persondata && persondata.secondMajorCredit}/36<br></br>(남은 학점:
          {36 - (persondata && persondata.secondMajorCredit)})
        </InfoTd>
      </InfoTable>
    </SideWrapper>
  );
}

const SideWrapper = styled.aside`
  width: 35rem;
  height: 100vh;

  background-color: #fff;

  padding: 5rem 3.5rem;
  position: fixed;
  right: 0;
`;
const InfoTitle = styled.p`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const InfoTable = styled.table`
  width: 28rem;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3;
  text-align: left;

  margin-top: 1rem;
  margin-bottom: 6rem;
`;
const InfoTh = styled.th`
  width: 13rem;
  color: #808080;
  padding-left: 1rem;
  border-bottom: 1px solid #bbb;
`;
const InfoTd = styled.td`
  color: #000;
  border-bottom: 1px solid #bbb;
`;