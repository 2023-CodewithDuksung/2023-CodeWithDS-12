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
  padding: 5rem;

  background: #f7f9fa;
  min-height: 100vh;
`;

const ConditionalTitle = styled.header`
  color: #22bcbc;
  font-weight: 700;
  font-size: 2.8rem;
`;
