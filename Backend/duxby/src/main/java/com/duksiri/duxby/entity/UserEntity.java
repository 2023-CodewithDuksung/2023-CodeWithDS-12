package com.duksiri.duxby.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@Table(name = "user_table")
public class UserEntity {

    @Id
    private String userStudentNumber;

    @Column(length = 50)
    private String userName;

    @Column(length = 50)
    private String userFirstMajor;

    @Column(length = 50)
    private String userSecondMajor;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean firstMajorHard;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean secondMajorHard;

    @Column
    private Integer requiredCourseCredit;

    @Column
    private Integer a1Credit;

    @Column
    private Integer a2Credit;

    @Column
    private Integer a3Credit;

    @Column
    private Integer bCredit;

    @Column
    private Integer cCredit;

    @Column
    private Integer selfDesignCredit;

    @Column
    private Integer baseMajorCredit;

    @Column
    private Integer firstMajorCredit;

    @Column
    private Integer secondMajorCredit;

    @Column
    private Integer GECredit;

    @Column
    private Integer totalCredit;

    @Column
    private float gradePointAverage;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean teamPlay;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean presentation;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean discussion;

}
