package com.duksiri.duxby.controller;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.entity.TakeSubjectEntity;
import com.duksiri.duxby.mapper.UserMapper;
import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/duxby")
@RequiredArgsConstructor
@Slf4j
public class CareerPlannerController {
    private final UserService userService;
    private final SubjectService subjectService;
    private final TakeSubjectService takeSubjectService;

    @GetMapping("/careerplanner")
    public Map<String, Object> getStudentData() {

        // responseBody
        Map<String, Object> response = new HashMap<>();

        // 학생 정보 조회
        response.put("persondata", userService.getStudentEntity("20210685"));

        // 전공 여부 로직 짜기
        UserMapper userMapper = new UserMapper();
        UserDTO userDTO = userMapper.toUserDTO(userService.getStudentEntity("20210685").get());

        // 1전공 과목 조회
        String firstMajor = userDTO.getUserFirstMajor();
        List<Map<String,Object>> subjectEntity = subjectService.getRequiredMajorSubject("전필", firstMajor);

        String requiredFirstMajorSubjectCode = (String) subjectEntity.get(0).get("subject_code");
        List<Map<String, Object>> takeSubjectEntity = takeSubjectService.getRequiredMajorSubject(requiredFirstMajorSubjectCode);

        if(takeSubjectEntity.size()== 0) {
            response.put("requiredFirstMajor", false);
        } else {
            response.put("requiredFirstMajor", true);
        }

        // 2전공 과목 조회
        // 시디는 전필이 없다합니다!!!!!!!!
        response.put("requiredSecondMajor", false);
        return response;
    }
}
