import React from 'react';
import { styled } from 'styled-components';

export default function ConditionalSelectBox() {
  return <ConditionalSelectContianer></ConditionalSelectContianer>;
}

const ConditionalSelectContianer = styled.div`
  width: 17rem;
  height: 4rem;
  border-radius: 10px;
  border: 2px solid #bbb;
  background: #fff;
`;
