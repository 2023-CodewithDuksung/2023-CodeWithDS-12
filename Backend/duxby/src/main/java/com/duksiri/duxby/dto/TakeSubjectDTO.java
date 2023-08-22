package com.duksiri.duxby.dto;

import com.duksiri.duxby.entity.SubjectEntity;
import com.duksiri.duxby.entity.UserEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class TakeSubjectDTO {

    private String takeSubjectId;
    private UserEntity userStudentNumber;
    private SubjectEntity subjectCode;
    private int completionGrade;
    private int completionSemester;

}
