import React from 'react';
import { styled } from 'styled-components';
import PgBar from './PgBar';
import NextPgBar from './NextPgBar';

export default function PgBox({ selectedCareer }) { 
    let pgBarStep = 0;
    if (selectedCareer === "none") {
        pgBarStep = 1; 
    } else if (selectedCareer === "exchange") {
        pgBarStep = 2; 
    } else if (selectedCareer === "practicum") {
        pgBarStep = 3; 
    } else if (selectedCareer === "internship") {
      pgBarStep = 4; 
  } 
  return (
    <BWrapper>
      <TWrapper>
        <TContainer>
          <FirstName>3학년 2학기</FirstName>
          {selectedCareer === "none" && (
            <SecondName>4학년 1학기</SecondName>
          )}
          {selectedCareer === "exchange" && (
            <Name>
              <SecondName>4학년 1학기</SecondName>
              <ExtraName>파견(교환/방문) 학생</ExtraName>
            </Name>
          )}
          {selectedCareer === "practicum" && (
            <Name>
              <SecondName>4학년 1학기</SecondName>
              <ExtraName>현장 실습</ExtraName>
            </Name>
          )}
          {selectedCareer === "internship" && (
            <Name>
              <SecondName>4학년 1학기</SecondName>
              <ExtraName>덕성 인턴십</ExtraName>
            </Name>
          )}
        </TContainer>
      </TWrapper>
      <ProgressBarWrapper>
        <Bar>
            <PgBar step={pgBarStep} /> 
            <NextPgBar step={pgBarStep} /> 
        </Bar>
        <ProgressContainer>
          {selectedCareer === "none" && (
            <ProgressTextContainer>
              <FMajorProgressText>1전공 (6학점)</FMajorProgressText>
              <SMajorProgressText>2전공 (6학점)</SMajorProgressText>
              <CultureProgressText>교양 (3학점)</CultureProgressText>
              <NFMajorProgressText>1전공 (6학점)</NFMajorProgressText>
              <NSMajorProgressText>2전공 (6학점)</NSMajorProgressText>
            </ProgressTextContainer>
          )}
          {selectedCareer === "exchange" &&(
            <ProgressTextContainer>
              <FMajorProgressText>1전공 (6학점)</FMajorProgressText>
              <SMajorProgressText>2전공 (9학점)</SMajorProgressText>
              <CultureProgressText>교양 (3학점)</CultureProgressText>
            </ProgressTextContainer>
          )}
          {selectedCareer === "practicum" && (
            <ProgressTextContainer>
              <FMajorProgressText>1전공 (6학점)</FMajorProgressText>
              <SMajorProgressText>2전공 (9학점)</SMajorProgressText>
              <CultureProgressText>교양 (3학점)</CultureProgressText>
            </ProgressTextContainer>
          )}
          {selectedCareer === "internship" && (
            <ProgressTextContainer>
              <FMajorProgressText>1전공 (6학점)</FMajorProgressText>
              <SMajorProgressText>2전공 (9학점)</SMajorProgressText>
              <CultureProgressText>교양 (3학점)</CultureProgressText>
            </ProgressTextContainer>
          )}
        </ProgressContainer>
      </ProgressBarWrapper>
           {selectedCareer === "none" && (
                <InfoBox>
                  <ThisSemester>
                    <Box>
                      <TextBox>
                        남은 학기 평균 11학점 이상 이수
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            남은 학점 (31)/ 남은 학기 (3)
                          </TooltipMainText>
                          <TooltipExtraText>
                            소수점 자리 올림
                          </TooltipExtraText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        학문의 융합 A1 이수 필요
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                  </ThisSemester>
                  <NextSemester>
                    <Box>
                      <TextBox>
                        남은 학기 평균 11학점 이상 이수
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            남은 학점 (31)/ 남은 학기 (3)
                          </TooltipMainText>
                          <TooltipExtraText>
                            소수점 자리 올림
                          </TooltipExtraText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공필수 과목 (졸업프로젝트1) 수강 필요
                      </TextBox>
                      <img src="./image/No.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        2전공 졸업 관련 과목 수강 필요
                      </TextBox>
                      <img src="./image/No.png" />
                    </Box>
                  </NextSemester>
                </InfoBox>
            )}
            {selectedCareer === "exchange" && (
                <InfoBox>
                  <ThisSemester>
                    <Box>
                      <TextBox>
                        2-3학년 재학생 중 학업 성적이 통산 평균 3.0 이상
                      </TextBox>
                      <img src="./image/Group 119.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        신청 시점(3학년 6학기)까지 평균 15학점 이상 이수
                      </TextBox>
                      <img src="./image/Group 119.png" />
                    </Box>
                    <Box>
                      <TextBox>
                       어학성적 및 제출 서류 준비
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            파견학교마다 어학기준이 상이합니다. 국제교류처 공지사항에서 확인해주세요.
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        교환학생 이수시, 남은 학기 평균 16학점 이상 이수  
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            남은 학점 (31)/ 남은 학기 (2)
                          </TooltipMainText>
                          <TooltipExtraText>
                            커리어 진행 학기는 남은 학기에서 제외되고 계산됩니다.
                          </TooltipExtraText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                  </ThisSemester>
                  <NextSemester>
                    <Box>
                      <TextBox>
                        전공관련 수업은 전공학점, 전공 무관 수업은 교양학점으로 인정
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            전공 개설 여부는 본인이 직접 파견대학 홈페이지를 방문하여 확인해주세요. 
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공필수 과목 (졸업프로젝트1) 수강 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        2전공 졸업 요건 (졸업전시 과목을 1년코스로 수강) 충족 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                  </NextSemester>
                </InfoBox>
            )}
            {selectedCareer === "internship" && (
                <InfoBox>
                  <ThisSemester>
                    <Box>
                      <TextBox>
                        3학년 이상 재학생 (6학기 이하)
                      </TextBox>
                      <img src="./image/Group 119.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        현장실습 이수 시, 남은 학기 평균 16학점 이상 이수
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            <TooltipMainText>
                              남은 학점 (31)/ 남은 학기 (2)
                            </TooltipMainText>
                            <TooltipExtraText>
                              커리어 진행 학기는 남은 학기에서 제외되고 계산됩니다.
                            </TooltipExtraText>
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                  </ThisSemester>
                  <NextSemester>
                    <Box>
                      <TextBox>
                        실습시간에 따라 12~15학점이 일반선택으로 인정
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            자세한 내용은 인턴십/현장실습 사이트 공지사항 및 대학일자리 본부에서 확인해주세요.
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공심화의 경우에만 전공선택으로 인정 가능
                      </TextBox>
                      <img src="./image/No.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공필수 과목 (졸업프로젝트1) 수강 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        전공 졸업 요건 (졸업전시 과목을 1년코스로 수강) 충족 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                  </NextSemester>
                </InfoBox>
            )}
            {selectedCareer === "practicum" && (
                <InfoBox>
                  <ThisSemester>
                    <Box>
                      <TextBox>
                        3학년 이상 재학생 / 휴학생
                      </TextBox>
                      <img src="./image/Group 119.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        현장실습 이수 시, 남은 학기 평균 16학점 이상 이수
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            <TooltipMainText>
                              남은 학점 (31)/ 남은 학기 (2)
                            </TooltipMainText>
                            <TooltipExtraText>
                              커리어 진행 학기는 남은 학기에서 제외되고 계산됩니다.
                            </TooltipExtraText>
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                  </ThisSemester>
                  <NextSemester>
                    <Box>
                      <TextBox>
                        근무 기간에 따라 3~12학점이 일반선택 또는 교양으로 인정
                      </TextBox>
                      <ImageContainer>
                        <TooltipImage src="./image/Group 185.png" alt="Tooltip Image" />
                        <Tooltip>
                          <TooltipMainText>
                            자세한 내용은 인턴십/현장실습 사이트 공지사항 및 대학일자리 본부에서 확인해주세요.
                          </TooltipMainText>
                        </Tooltip>
                      </ImageContainer>
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공심화의 경우에만 전공선택으로 인정 가능
                      </TextBox>
                      <img src="./image/No.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        1전공 전공필수 과목 (졸업프로젝트1) 수강 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                    <Box>
                      <TextBox>
                        2전공 졸업 요건 (졸업전시 과목을 1년코스로 수강) 충족 불가
                      </TextBox>
                      <img src="./image/Group 195.png" />
                    </Box>
                  </NextSemester>
                </InfoBox>
            )}
        </BWrapper>
  );
}

const BWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.3rem 0 3.4rem;
  margin-bottom: 3rem;
  background-color: #fff;
  align-content: center;
  width: 1000px;
  height: 400px;
`;

const TWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TContainer = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;
const Name = styled.div`
  height: 1.5rem;
  display: flex;
  margin-top: 0.1rem;
`;

const FirstName = styled.h1`
  color: #000000;
  height: 5rem;
  font-weight: 700;
  font-size: 2rem;
  margin-right: 32rem;
`;

const SecondName = styled.h1`
  color: #000000;
  height: 5rem;
  font-weight: 700;
  font-size: 2rem;
  margin-right: 1rem;
`;

const ExtraName = styled.p`
  color: #22BCBC;
  height: 5rem;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0rem;
`;

const Bar = styled.div`
  display: flex;
`;

const ProgressContainer = styled.div`
  display: flex;
`;

const ProgressTextContainer = styled.div`
  display: flex;
`

const FMajorProgressText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #bbbbbb;
  margin-top: 0.5rem;
  margin-left: 4.5rem;
  margin-right: 4.5rem;
`;

const SMajorProgressText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #bbbbbb;
  margin-top: 0.5rem;
  margin-left: 4.5rem;
  margin-right: 4.5rem;
`;

const CultureProgressText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #bbbbbb;
  margin-top: 0.5rem;
  margin-right: 5rem;
`;

const NFMajorProgressText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #bbbbbb;
  margin-top: 0.5rem;
  margin-left: 3rem;
  margin-right: 4.5rem;
`;

const NSMajorProgressText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #bbbbbb;
  margin-top: 0.5rem;
  margin-left: 9rem;
  margin-right: 4.5rem;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
`;

const ThisSemester = styled.div`
  flex: 0.4; 
  display: flex;
  flex-direction: column;
  margin-right: 1.2rem;
`;

const NextSemester = styled.div`
  flex: 0.4; 
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.p`
  width: 35rem;
  font-weight: bold;
  text-align: left;
  font-size: 1.2rem;
`;

const Box = styled.div`
  width: 42rem;
  height: 3.5rem;
  background-color: #EEEEEE;
  margin: 1rem 0;
  border-radius: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 110px;
  width: 22rem;
  transform: translateX(-50%);
  background-color: #FFFFFF;
  color: black;
  padding: 1rem 2rem 2rem 2rem;
  font-size: 14px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  border: 2px solid #BBBBBB;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 10px;
    border: 2px solid #BBBBBB; 
    border-width: 10px;
    margin-left: -10px;
    border-top-color: #FFFFFF;
  }
`;

const TooltipImage = styled.img`
  &:hover + ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipMainText = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TooltipExtraText = styled.p`
  font-size: 1.2rem;
  color: #808080;
`;


