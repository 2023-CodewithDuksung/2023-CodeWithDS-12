import React from 'react';
import { styled } from 'styled-components';
import DuksungLogoWithTitle from '../../assets/icon/DuksungLogoWithTitle.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <DuksungLogo src={DuksungLogoWithTitle} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 8rem;

  background-color: #fff;
`;

const DuksungLogo = styled.img`
  width: 17.6rem;
  height: 4rem;
  margin-left: 2.6rem;
`;

const UserContainer = styled.div`
  display: flex;
`;
