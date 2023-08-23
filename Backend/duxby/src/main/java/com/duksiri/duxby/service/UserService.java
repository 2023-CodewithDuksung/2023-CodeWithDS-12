package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.mapper.UserMapper;
import com.duksiri.duxby.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    // Repository 선언
    private final UserRepository userRepository;

    // 테이블에 데이터 저장 메소드
    public void saveUser(UserDTO userDTO) {
        userDTO.setUserStudentNumber("20210685");
        userDTO.setUserName("김덕성");
        userDTO.setUserFirstMajor("컴퓨터공학전공");
        userDTO.setUserSecondMajor("시각디자인전공");
        userDTO.setFirstMajorHard(false);
        userDTO.setSecondMajorHard(false);
        userDTO.setRequiredCourseCredit(15);
        userDTO.setA1Credit(0);
        userDTO.setA2Credit(3);
        userDTO.setA3Credit(6);
        userDTO.setBCredit(9);
        userDTO.setCCredit(3);
        userDTO.setSelfDesignCredit(5);
        userDTO.setBaseMajorCredit(15);
        userDTO.setFirstMajorCredit(24);
        userDTO.setSecondMajorCredit(18);
        userDTO.setGECredit(42);
        userDTO.setTotalCredit(99);
        userDTO.setGradePointAverage((float) 3.8);
        userDTO.setTeamPlay(false);
        userDTO.setPresentation(true);
        userDTO.setDiscussion(false);

        userRepository.save(UserMapper.toUserEntity(userDTO));
    }

    // 데이터 업데이트 메소드 (추후 추가)

}
