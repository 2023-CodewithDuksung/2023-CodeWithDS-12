import React from 'react';
import { USER_DATA } from '../../../core/mockCourseScore';
import { styled } from 'styled-components';

export default function ElectiveList({ type }) {
  let DATA_LIST;
  console.log(type);
  switch (type) {
    case 'GESubject':
      DATA_LIST = USER_DATA.GESubject;
      break;
    case 'baseMajorSubject':
      DATA_LIST = USER_DATA.baseMajorSubject;
      break;
    case 'firstMajorSubject':
      DATA_LIST = USER_DATA.firstMajorSubject;
      break;
    case 'secondMajorSubject':
      DATA_LIST = USER_DATA.secondMajorSubject;
      break;
    default:
  }

  //   const DATA_LIST = USER_DATA.GESubject;
  console.log(DATA_LIST);
  return (
    <ListContainer>
      <tr>
        <ListHead>구분</ListHead>
        <ListHead>영역</ListHead>
        <ListHead>교과목명</ListHead>
        <ListHead>학점</ListHead>
        <ListHead>등급</ListHead>
        <ListHead>이수학기</ListHead>
      </tr>
      {DATA_LIST.map((data, idx) => (
        <tr>
          <ListBody>{data.subject_classification}</ListBody>
          <ListBody>{data.subject_name}</ListBody>
          <ListBody>{data.subject_name}</ListBody>
          <ListBody>{data.credit}</ListBody>
          <ListBody></ListBody>
          <ListBody>
            {data.completion_grade}학년 {data.completion_semester}학기
          </ListBody>
        </tr>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.table`
  width: 78rem;
  margin: 3rem;

  font-weight: 500;
  font-size: 1.2rem;

  text-align: center;
  font-family: Noto Sans KR;
`;

const ListHead = styled.th`
  padding: 1rem;

  background-color: #f7f9fa;

  border-right: solid 0.1rem black;
  border-bottom: solid 0.1rem black;
`;

const ListBody = styled.td`
  padding: 1rem;

  border-right: solid 0.1rem black;
  border-bottom: solid 0.1rem black;
`;
