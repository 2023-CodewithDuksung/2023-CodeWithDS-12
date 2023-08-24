package com.duksiri.duxby.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class UserDTO {

    private String userStudentNumber;
    private String userName;
    private String userFirstMajor;
    private String userSecondMajor;
    private boolean firstMajorHard;
    private boolean secondMajorHard;
    private int requiredCourseCredit;
    private int a1Credit;
    private int a2Credit;
    private int a3Credit;
    private int bCredit;
    private int cCredit;
    private int selfDesignCredit;
    private int baseMajorCredit;
    private int firstMajorCredit;
    private int secondMajorCredit;
    private int restCredit;
    private int restSemester;
    private int semester;
    private int GECredit;
    private int totalCredit;
    private float gradePointAverage;
    private boolean teamPlay;
    private boolean presentation;
    private boolean discussion;
}
