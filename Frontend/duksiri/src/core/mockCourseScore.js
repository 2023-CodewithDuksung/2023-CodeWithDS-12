export const USER_DATA = {
  success: true, // 통신성공
  persondata: {
    userName: '김덕성',
    userFirstMajor: '컴퓨터공학전공',
    userSecondMajor: '시각디자인전공',
    firstMajorHard: false, // 1전공 심화전공 여부; => total 36학점
    secondMajorHard: false, // 2전공 심화전공 여부;
    requiredCourseCredit: 15, // 필수교양 토탈 학점
    A1Credit: 0, // A1영역 학점
    A2Credit: 3, // A2영역 학점
    A3Credit: 6, // A3영역 학점
    BCredit: 9, // B영역 학점
    CCredit: 3, // C영역 학점
    SelfDisingCredit: 5, // 자기설계 학점
    setBaseMajorCredit: 15, //전공탐색 학점
    firstMajorCredit: 24, // 1전공 학점
    secondMajorCredit: 18, // 2전공 학점
    GECredit: 42, // 교양 total 학점
    totalCredit: 99, // 총
  },
  GEsubject: [
    // 이수한 교양
    {
      grade: '1~4',
      subject_classification: '융합(계열)',
      subject_name: 'UX디자인의이해',
      semester: 2, // 학기
      subject_hour: 3, // 수업시간
    },
    {
      grade: '1~4',
      subject_classification: '융합(계열)',
      subject_name: 'UX디자인의이해',
      semester: 2, // 학기
      subject_hour: 3, // 수업시간
    },
  ],
  baseMajorSubject: [
    // 이수한 전탐
    {
      grade: '1',
      subject_classification: '전탐',
      subject_name: '컴퓨터와친해지기',
      semester: 2, // 학기
      subjectHour: 3, // 수업시간
    },
    {
      grade: '1',
      subject_classification: '전탐',
      subject_name: '컴퓨터와친해지기',
      semester: 2, // 학기
      subject_hour: 3, // 수업시간
    },
  ],
  firstMajorSubject: [
    // 이수한 1전공
    {
      grade: '2',
      subject_classification: '전선',
      subject_name: '인터넷프로그래밍',
      semester: 1,
      subject_hour: 3,
      subject_completion: true, // 이수여부인데 구현을 아마 못하지않을까.... 시간이 남으면 시도해보겠습니다
    },
    {
      grade: '2',
      subject_classification: '전선',
      subject_name: '인터넷프로그래밍',
      semester: 1,
      subject_hour: 3,
      subject_completion: true, // 이수여부인데 구현을 아마 못하지않을까.... 시간이 남으면 시도해보겠습니다
    },
  ],
  secondMajorSubject: [
    // 이수한 2전공
    {
      grade: '2',
      subject_classification: '전선',
      subject_name: '타이포그래픽디자인1',
      semester: 2,
      subject_hour: 3,
      subject_completion: true, // 이수여부인데 구현을 아마 못하지않을까.... 시간이 남으면 시도해보겠습니다
    },
    {
      grade: '2',
      subject_classification: '전선',
      subject_name: '타이포그래픽디자인1',
      semester: 2,
      subject_hour: 3,
      subject_completion: true, // 이수여부인데 구현을 아마 못하지않을까.... 시간이 남으면 시도해보겠습니다
    },
  ],
};
