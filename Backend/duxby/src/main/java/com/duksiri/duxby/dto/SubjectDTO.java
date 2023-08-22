package com.duksiri.duxby.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class SubjectDTO {

    private String subjectCode;
    private String major;
    private String grade;
    private int year;
    private int semester;
    private String subjectClassification;
    private String subjectName;
    private String professor;
    private int credit;
    private int subjectHour;
    private String GEClassification;
    private float subjectDifficulty;
    private int teamPlay;
    private int presentation;
    private int discussion;
    private float subjectRating;

}
