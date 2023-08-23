package com.duksiri.duxby.controller;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.entity.UserEntity;
import com.duksiri.duxby.mapper.UserMapper;
import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

// 이수 내역 pageController
@RestController
@RequestMapping("/duxby")
@RequiredArgsConstructor
@Slf4j
public class CompletionController {

    private final UserService userService;
    private final SubjectService subjectService;
    private final TakeSubjectService takeSubjectService;

    @GetMapping("/completioninfo")
    public Map<String, Object> getCompletionSubject(@RequestBody Map<String, String> requestMap) {

        // responseBody
        Map<String, Object> response = new HashMap<>();

        // 학번이 들어오지 않음
        if (requestMap.get("userStudentNumber") == null) {
            response.put("success", false);
            return response;
        }
        // 학번으로 person data 조회 후 없는 경우
        if(userService.getStudentEntity(requestMap.get("userStudentNumber")) == null) {
            response.put("success", false);
            return response;
        }

        // request에서 학번 변수에 넣기
        String userStudentNumber = requestMap.get("userStudentNumber");

        // 강의 받아올 맵리스트 선언
        List<Map<String, Object>> completionSubjectList = new ArrayList<>();
        List<String> subjectCompletion = new ArrayList<>();
        String subjectCompletionString = null;

        // 학생 정보 조회
        response.put("persondata", userService.getStudentEntity(userStudentNumber));

        UserMapper userMapper = new UserMapper();
        UserDTO userDTO = userMapper.toUserDTO(userService.getStudentEntity(userStudentNumber).get());

        // 교양 과목 조회
        completionSubjectList = subjectService.getUserGECompletionSubject(userStudentNumber, subjectCompletion);
        response.put("GESubject", completionSubjectList);

        // 전탐 과목 조회
        completionSubjectList = subjectService.getUserBaseMajorCompletionSubject(userStudentNumber, subjectCompletionString);
        response.put("baseMajorSubject", completionSubjectList);

        // 1전공 과목 조회
        String firstMajor = userDTO.getUserFirstMajor();

        completionSubjectList = subjectService.getUserFirstMajorCompletionSubject(userStudentNumber, firstMajor);
        response.put("firstMajorSubject", completionSubjectList);

        // 2전공 과목 조회
        String secondMajor = userDTO.getUserSecondMajor();

        completionSubjectList = subjectService.getUserSecondMajorCompletionSubject(userStudentNumber, secondMajor);
        response.put("secondMajorSubject", completionSubjectList);

        response.put("success",true);
        return response;
    }

}
