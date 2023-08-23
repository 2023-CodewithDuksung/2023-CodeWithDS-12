package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.mapper.SubjectMapper;
import com.duksiri.duxby.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SubjectService {

    // repository 선언
    private final SubjectRepository subjectRepository;

    // 테이블에 데이터 저장 메소드
    public void saveSubject(SubjectDTO subjectDTO) {
        subjectRepository.save(SubjectMapper.toSubjectEntity(subjectDTO));
    }

    public List<Map<String, Object>> getUserGECompletionSubject(String studentNumber, List<String> subjectClassification) {
        subjectClassification.add("융합(계열)");
        subjectClassification.add("기초");
        subjectClassification.add("설계");
        return subjectRepository.findGESubject(studentNumber, subjectClassification);
    }
    public List<Map<String, Object>> getUserBaseMajorCompletionSubject(String studentNumber, String subjectClassification) {
        subjectClassification = "전탐";
        return subjectRepository.findBaseMajorSubject(studentNumber, subjectClassification);
    }

    public List<Map<String, Object>> getUserFirstMajorCompletionSubject(String studentNumber, String firstMajor) {
        String subjectClassification = "전탐";
        return subjectRepository.findFirstMajorSubject(studentNumber, subjectClassification, firstMajor);
    }
    public List<Map<String, Object>> getUserSecondMajorCompletionSubject(String studentNumber, String secondMajor) {
        String subjectClassification = "전탐";
        return subjectRepository.findSecondMajorSubject(studentNumber, subjectClassification, secondMajor);
    }

}
