import React from 'react';
import { styled } from 'styled-components';

export default function Header() {
  return <HeaderWrapper>header</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 8rem;

  background-color: #fff;
`;
