import React from 'react';
import { styled } from 'styled-components';
import ConditionalSelectBox from './ConditionalSelectBox';
import ConditionalPlanList from './ConditionalPlanList';

export default function ConditionalContent() {
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
          <ConditionalPlanHeader></ConditionalPlanHeader>
          <ConditionalPlanList />
        </ConditionalPlanBox>
        <ConditionalPlanBox>
          <ConditionalPlanHeader></ConditionalPlanHeader>
          <ConditionalPlanList />
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
  justify-content: space-around;
`;
