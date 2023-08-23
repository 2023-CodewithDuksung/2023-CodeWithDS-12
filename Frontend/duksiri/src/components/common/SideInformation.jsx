import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SideInformation() {
  return (
    <SideWrapper>
      <InfoTitle>학적정보 요약</InfoTitle>
      <InfoTable>
        <InfoTh>학번</InfoTh>
        <InfoTd>20210685</InfoTd>
        <tr></tr>
        <InfoTh>성명</InfoTh>
        <InfoTd>김덕성</InfoTd>
        <tr></tr>
        <InfoTh>수강학년(학기)</InfoTh>
        <InfoTd>3학년(6) </InfoTd>
        <tr></tr>
        <InfoTh>전공</InfoTh>
        <InfoTd>20210685</InfoTd>
      </InfoTable>
      <InfoTitle>이수내역 요약</InfoTitle>
      <InfoTable>
        <InfoTh>교양</InfoTh>
        <InfoTd>20210685</InfoTd>
        <tr></tr>
        <InfoTh>전탐</InfoTh>
        <InfoTd>김덕성</InfoTd>
        <tr></tr>
        <InfoTh>1전공</InfoTh>
        <InfoTd>3학년(6) </InfoTd>
        <tr></tr>
        <InfoTh>2전공</InfoTh>
        <InfoTd>20210685</InfoTd>
      </InfoTable>
    </SideWrapper>
  );
}

const SideWrapper = styled.aside`
  width: 35rem;
  height: 100vh;

  background-color: #fff;

  padding: 5rem 3.5rem;
`;
const InfoTitle = styled.p`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const InfoTable = styled.table`
  width: 28rem;
  font-family: Noto Sans KR;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 3;
  text-align: left;

  margin-top: 1rem;
  margin-bottom: 10rem;
`;
const InfoTh = styled.th`
  width: 14rem;
  color: #808080;
  padding-left: 1rem;
  border-bottom: 1px solid #bbb;
`;
const InfoTd = styled.td`
  color: #000;
  border-bottom: 1px solid #bbb;
`;
