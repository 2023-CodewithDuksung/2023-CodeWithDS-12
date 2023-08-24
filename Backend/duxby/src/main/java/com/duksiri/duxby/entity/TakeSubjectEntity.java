package com.duksiri.duxby.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "take_subject_table")
public class TakeSubjectEntity {

    @Id
    @Column(length = 50)
    private String takeSubjectId;

    @ManyToOne
    @JoinColumn(name = "user_student_number")
    private UserEntity userStudentNumber;

    @ManyToOne
    @JoinColumn(name = "subject_code")
    private SubjectEntity subjectCode;

    @Column
    private Integer completionGrade;

    @Column
    private Integer completionSemester;
}
