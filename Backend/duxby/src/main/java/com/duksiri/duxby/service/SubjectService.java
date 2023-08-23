package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.mapper.SubjectMapper;
import com.duksiri.duxby.model.ScheduleFilter;
import com.duksiri.duxby.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<Map<String, Object>> getFilteringSubject(ScheduleFilter scheduleFilter) {

        List<String> subjectClassification = new ArrayList<>();
        subjectClassification.add("전선");
        subjectClassification.add("전필");
        String major = scheduleFilter.getMajor();
        int grade = scheduleFilter.getGrade();
        int presentation = (scheduleFilter.isPresentation() == false) ? 0 : 1;
        int teamPlay = (scheduleFilter.isTeamPlay() == false) ? 0 : 1;
        int discussion = (scheduleFilter.isDiscussion() == false) ? 0 : 1;

        if(presentation == 0 && teamPlay == 0 && discussion == 0) {
            return subjectRepository.findFilteringSubject000(subjectClassification, major, grade);
        }
        if(presentation == 1 && teamPlay == 0 && discussion == 0) {
            return subjectRepository.findFilteringSubject100(subjectClassification, major, grade);
        }
        if(presentation == 0 && teamPlay == 1 && discussion == 0) {
            return subjectRepository.findFilteringSubject010(subjectClassification, major, grade);
        }
        if(presentation == 1 && teamPlay == 1 && discussion == 0) {
            return subjectRepository.findFilteringSubject110(subjectClassification, major, grade);
        }
        if(presentation == 0 && teamPlay == 0 && discussion == 1) {
            return subjectRepository.findFilteringSubject001(subjectClassification, major, grade);
        }
        if(presentation == 1 && teamPlay == 0 && discussion == 1) {
            return subjectRepository.findFilteringSubject101(subjectClassification, major, grade);
        }
        if(presentation == 0 && teamPlay == 1 && discussion == 1) {
            return subjectRepository.findFilteringSubject011(subjectClassification, major, grade);
        }
        if(presentation == 1 && teamPlay == 1 && discussion == 1) {
            return subjectRepository.findFilteringSubject111(subjectClassification, major, grade);
        }

       return null;
    }

}
