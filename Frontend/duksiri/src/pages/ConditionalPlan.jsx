import React from 'react';
import { styled } from 'styled-components';
import ConditionalContent from './../components/conditionalPan/ConditionalContent';
import SideInformation from './../components/common/SideInformation';

export default function ConditionalPlan() {
  return (
    <ConditionalContainer>
      <ConditionalWrapper>
        <ConditionalTitle>스마트 시간표</ConditionalTitle>
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
  height: 100vh;
  padding: 5rem;

  background: #f7f9fa;
`;

const ConditionalTitle = styled.header`
  color: #22bcbc;
  font-weight: 700;
  font-size: 2.8rem;
`;
