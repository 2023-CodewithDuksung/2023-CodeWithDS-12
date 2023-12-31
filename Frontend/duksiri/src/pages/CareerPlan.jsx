import React, { useState } from 'react'; 
import PgBox from '../components/careerPlan/creditPlan/PgBox';
import CareerSelect from '../components/careerPlan/creditPlan/Select';
import SecondSelect from '../components/careerPlan/creditPlan/SecondSelect';
import { styled } from 'styled-components';
import SideInformation from '../api/SideInformation';

export default function CareerPlan() {
    const [selectedCareer, setSelectedCareer] = useState("none");
    const [selectedSecondCareer, setSelectedSecondCareer] = useState("none");

    const handleCareerChange = function(event) {
      setSelectedCareer(event.target.value);
  };

  const handleSecondCareerChange = function(event) {
      setSelectedSecondCareer(event.target.value);
  };

    return (
        <HomeContainer>
          <CareerWrapper>
              <TitleContainer>
                  <Title>커리어 플래너</Title>
                  <PlanDescription>다음 학기에 희망하는 커리어를 선택해주시면, 맞춤형 플랜이 제공됩니다.</PlanDescription>
              </TitleContainer>
              <SelectContainer>
                  <CareerSelect selectedValue={selectedCareer} onSelectionChange={handleCareerChange} />
              </SelectContainer>
              <BoxContainer>
                  <PgBox selectedCareer={selectedCareer} />
              </BoxContainer>
              <SelectContainer>
                  <SecondSelect selectedValue={selectedSecondCareer} onSelectionChange={handleSecondCareerChange} />
              </SelectContainer>
              <BoxContainer>
                  <PgBox selectedCareer={selectedSecondCareer} />
              </BoxContainer>
          </CareerWrapper>        
          <SideInformation />
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    display: flex;
    justify-content: space-between;
`;

const CareerWrapper = styled.div`
  padding: 5rem;
  background: #f7f9fa;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
    display: flex;
`;

const Title = styled.h1`
    margin-bottom: 5.7rem;
    margin-right: 2rem;
    color: #22BCBC;
    font-weight: 700;
    font-size: 3rem;
`;

const PlanDescription = styled.p`
    font-size: 1.2rem;
    color: #808080;
    margin-top: 1.5rem;
`;

const SelectContainer = styled.article`
    display: grid;
    grid-template-columns: 2fr;
`

const BoxContainer = styled.article`
    display: grid;
    grid-template-columns: 2fr;
`;