package com.duksiri.duxby.controller;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class DataController {

    // Service 선언
    private final UserService userService;

    @GetMapping("/data/usertable")
    public void userTable() {

        // 임시로 설정한 dummydata
        UserDTO userDTO = new UserDTO();
        userDTO.setUserStudentNumber("20210000");
        userDTO.setUserName("김덕성");
        userDTO.setUserFirstMajor("컴퓨터공학전공");
        userDTO.setUserSecondMajor("시각디자인전공");
        userDTO.setFirstMajorHard(false);
        userDTO.setSecondMajorHard(false);
        userDTO.setRequiredCourseCredit(15);
        userDTO.setA1Credit(6);
        userDTO.setA2Credit(6);
        userDTO.setA3Credit(6);
        userDTO.setBCredit(6);
        userDTO.setCCredit(6);
        userDTO.setSelfDesignCredit(3);
        userDTO.setBaseMajorCredit(15);
        userDTO.setFirstMajorCredit(33);
        userDTO.setSelfDesignCredit(33);
        userDTO.setGECredit(36);
        userDTO.setTotalCredit(92);
        userDTO.setTeamPlay(false);
        userDTO.setPresentation(true);
        userDTO.setDiscussion(false);

        userService.saveUser(userDTO);
    }

}
