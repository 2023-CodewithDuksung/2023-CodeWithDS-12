package com.duksiri.duxby.controller;

import com.duksiri.duxby.model.ScheduleFilter;
import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// 시간표 page controller
@RestController
@RequestMapping("/duxby")
@RequiredArgsConstructor
@Slf4j
public class PersonalScheduleController {

    private final UserService userService;
    private final SubjectService subjectService;
    private final TakeSubjectService takeSubjectService;

    @GetMapping("/smartschedule")
    public Map<String, Object> getFilteringSubject(@ModelAttribute ScheduleFilter scheduleFilter) {
        // responseBody
        Map<String, Object> response = new HashMap<>();

        // 학생 정보 조회
        response.put("persondata", userService.getStudentEntity("20210685"));

        // 강의 담을 List
        List<Map<String, Object>> filteringSubjectList = new ArrayList<>();

        filteringSubjectList = subjectService.getFilteringSubject(scheduleFilter);
        response.put("subject", filteringSubjectList);

        return response;
    }
}
