import React from 'react';
import { styled } from 'styled-components';
import DuksungLogoWithTitle from '../../assets/icon/DuksungLogoWithTitle.png';

export default function Header() {
  const TOP_NAV_LIST = ['김덕성', '덕성홈페이지', '이클래스', '포탈'];

  function handleMoveSite(site) {
    switch (site) {
      case '덕성홈페이지':
        window.open('http://www.duksung.ac.kr/');
        break;
      case '이클래스':
        window.open('https://lms.duksung.ac.kr/');
        break;
      case '포탈':
        window.open('https://sso.duksung.ac.kr/');
        break;
    }
  }
  return (
    <HeaderWrapper>
      <DuksungLogo src={DuksungLogoWithTitle} alt="duksungLogo" />
      <UserContainer>
        {TOP_NAV_LIST.map((site, idx) => (
          <TopList key={idx} onClick={() => handleMoveSite(site)}>
            {site}
          </TopList>
        ))}
        <LogButton>로그아웃</LogButton>
      </UserContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const UserContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.img``;

const TopList = styled.li`
  margin-left: 2rem;

  color: #808080;
  font-weight: 500;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const LogButton = styled.button`
  margin: 0 3rem;
  padding: 0.8rem 1.5rem;

  background: #808080;
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
`;
