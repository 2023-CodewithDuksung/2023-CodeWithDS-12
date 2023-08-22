package com.duksiri.duxby.mapper;

import com.duksiri.duxby.dto.TakeSubjectDTO;
import com.duksiri.duxby.entity.TakeSubjectEntity;

public class TakeSubjectMapper {

    // TakeSubjectEntity를 TakeSubjectDTO로 변환하는 메서드
    public static TakeSubjectDTO toTakeSubjectDTO(TakeSubjectEntity takeSubjectEntity) {
        return TakeSubjectDTO.builder()
                .takeSubjectId(takeSubjectEntity.getTakeSubjectId())
                .userStudentNumber(takeSubjectEntity.getUserStudentNumber())
                .subjectCode(takeSubjectEntity.getSubjectCode())
                .completionGrade(takeSubjectEntity.getCompletionGrade())
                .completionSemester(takeSubjectEntity.getCompletionSemester())
                .build();
    }

    // TakeSubjectDTO를 TakeSubjectEntity로 변환하는 메서드
    public static TakeSubjectEntity toTakeSubjectEntity(TakeSubjectDTO takeSubjectDTO) {
        return TakeSubjectEntity.builder()
                .takeSubjectId(takeSubjectDTO.getTakeSubjectId())
                .userStudentNumber(takeSubjectDTO.getUserStudentNumber())
                .subjectCode(takeSubjectDTO.getSubjectCode())
                .completionGrade(takeSubjectDTO.getCompletionGrade())
                .completionSemester(takeSubjectDTO.getCompletionSemester())
                .build();
    }

}
