package com.duksiri.duxby.controller;

import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

        Map<String, Object> response = new HashMap<>();

        if (requestMap.get("userStudentNumber") == null) {
            response.put("success", false);
            return response;
        }

        response.put("persondata", userService.getStudentEntity(requestMap.get("userStudentNumber")));
        List<String> subjectCompletion = new ArrayList<>();
        List<Map<String, Object>> geCompletion = subjectService.getUserGECompletionSubject(requestMap.get("userStudentNumber"), subjectCompletion);

        response.put("GECompletion", geCompletion);

        response.put("success",true);
        return response;
    }

}
