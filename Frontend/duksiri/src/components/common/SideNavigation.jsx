import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SideNavigation() {
  const navigate = useNavigate();
  const MENU_LIST = ['학적 정보', '이수 내역', '커리어 플래너', '퍼스널 시간표'];

  function handleMovePage(menu) {
    switch (menu) {
      case '이수 내역':
        navigate('/course');
        break;
      case '커리어 플래너':
        navigate('/career');
        break;
      case '퍼스널 시간표':
        navigate('/plan');
        break;
      default:
        navigate('/ready');
    }
  }
  return (
    <SideWrapper>
      <MenuUl>
        {MENU_LIST.map((menu, idx) => (
          <MenuLi key={idx} onClick={() => handleMovePage(menu)}>
            {menu}
          </MenuLi>
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
  padding-top: 8rem;

  background-color: #2f3033;
`;

const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 6.7rem;

  color: #999;
  align-content: center;
`;

const MenuLi = styled.li`
  margin: 0.3rem;
  padding-top: 5rem;

  font-size: 1.8rem;

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
