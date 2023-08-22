package com.duksiri.duxby.controller;

import com.duksiri.duxby.dto.TakeSubjectDTO;
import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.parse.SubjectCsvParser;
import com.duksiri.duxby.parse.TakeSubjectCsvParser;
import com.duksiri.duxby.service.SubjectService;
import com.duksiri.duxby.service.TakeSubjectService;
import com.duksiri.duxby.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class DataController {

    // Service 선언..
    // test
    private final UserService userService;
    private final SubjectService subjectService;
    private final TakeSubjectService takeSubjectService;

    @GetMapping("/data/usertable")
    public void userTable() {

        // 임시로 설정한 dummydata
        UserDTO userDTO = new UserDTO();
        userService.saveUser(userDTO);
    }

    @GetMapping("/data/subjecttable")
    public void subjectTable() {
        SubjectCsvParser csvParser = new SubjectCsvParser(subjectService);
        csvParser.readSubjectCSV();
    }

    @GetMapping("/data/takesubjecttable")
    public void takeSubjectTable() {
        TakeSubjectCsvParser csvParser = new TakeSubjectCsvParser(takeSubjectService);
        csvParser.readTakeSubjectCSV();
    }

}
