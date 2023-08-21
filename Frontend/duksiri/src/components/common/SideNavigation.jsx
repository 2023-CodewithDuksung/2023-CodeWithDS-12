import { styled } from 'styled-components';

export default function SideNavigation() {
  const MenuList = ['학생 정보', '추가 정보', '이수 내역', '플래너', '추천 강의'];

  return (
    <SideWrapper>
      <MenuUl>
        {MenuList.map((menu, idx) => (
          <MenuLi key={idx}> {menu} </MenuLi>
        ))}
      </MenuUl>
    </SideWrapper>
  );
}

const SideWrapper = styled.aside`
  display: block;
  position: fixed;
  left: 0;

  width: 24rem;
  height: 100%;

  background-color: #2f3033;
`;

const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 6.7rem;

  color: #999;
`;

const MenuLi = styled.li`
  width: 23rem;
  margin: 0.3rem;
  padding: 2rem 7rem;

  background-color: white;
  font-size: 1.8rem;
`;
