package com.duksiri.duxby.mapper;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.entity.SubjectEntity;

public class SubjectMapper {

    // SubjectEntity를 dto로 변환
    public static SubjectDTO toSubjectDTO(SubjectEntity subjectEntity) {
        return SubjectDTO.builder()
                .subjectCode(subjectEntity.getSubjectCode())
                .major(subjectEntity.getMajor())
                .grade(subjectEntity.getGrade())
                .year(subjectEntity.getYear())
                .semester(subjectEntity.getSemester())
                .subjectClassification(subjectEntity.getSubjectClassification())
                .subjectName(subjectEntity.getSubjectName())
                .professor(subjectEntity.getProfessor())
                .credit(subjectEntity.getCredit())
                .subjectHour(subjectEntity.getSubjectHour())
                .GEClassification(subjectEntity.getGEClassification())
                .subjectCode(subjectEntity.getSubjectCode())
                .subjectDifficulty(subjectEntity.getSubjectDifficulty())
                .teamPlay(subjectEntity.getTeamPlay())
                .presentation(subjectEntity.getPresentation())
                .discussion(subjectEntity.getDiscussion())
                .subjectRating(subjectEntity.getSubjectRating())
                .build();
    }

    // SubjectDTO를 entity로 변환
    public static SubjectEntity toSubjectEntity(SubjectDTO subjectDTO) {
        return SubjectEntity.builder()
                .subjectCode(subjectDTO.getSubjectCode())
                .major(subjectDTO.getMajor())
                .grade(subjectDTO.getGrade())
                .year(subjectDTO.getYear())
                .semester(subjectDTO.getSemester())
                .subjectClassification(subjectDTO.getSubjectClassification())
                .subjectName(subjectDTO.getSubjectName())
                .professor(subjectDTO.getProfessor())
                .credit(subjectDTO.getCredit())
                .subjectHour(subjectDTO.getSubjectHour())
                .GEClassification(subjectDTO.getGEClassification())
                .subjectCode(subjectDTO.getSubjectCode())
                .subjectDifficulty(subjectDTO.getSubjectDifficulty())
                .teamPlay(subjectDTO.getTeamPlay())
                .presentation(subjectDTO.getPresentation())
                .discussion(subjectDTO.getDiscussion())
                .subjectRating(subjectDTO.getSubjectRating())
                .build();
    }


}
