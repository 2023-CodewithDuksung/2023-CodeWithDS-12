import React from 'react';
import { styled } from 'styled-components';
import ConditionalContent from './../components/conditionalPan/ConditionalContent';
import SideInformation from './../components/common/SideInformation';

export default function ConditionalPlan() {
  return (
    <ConditionalContainer>
      <ConditionalWrapper>
        <ConditionalTitle>퍼스널 시간표</ConditionalTitle>
        <ConditionalContent />
      </ConditionalWrapper>
      <SideInformation />
    </ConditionalContainer>
  );
}
const ConditionalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ConditionalWrapper = styled.div`
  min-height: 100vh;
  background: #f7f9fa;
  padding: 5rem;
`;

const ConditionalTitle = styled.header`
  color: #22bcbc;
  font-family: Noto Sans KR;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
