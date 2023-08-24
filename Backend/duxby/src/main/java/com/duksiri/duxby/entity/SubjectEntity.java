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
@Table(name = "subject_table")
public class SubjectEntity {

    @Id
    @Column(length = 20)
    private String subjectCode;

    @Column(length = 50)
    private String major;

    @Column(length = 10)
    private String grade;

    @Column
    private Integer year;

    @Column
    private Integer semester;

    @Column(length = 50)
    private String subjectClassification;

    @Column(length = 50)
    private String subjectName;

    @Column(length = 50)
    private String professor;

    @Column
    private Integer credit;

    @Column
    private Integer subjectHour;

    @Column(length = 50)
    private String GEClassification;

    @Column
    private float subjectDifficulty;

    @Column
    private Integer teamPlay;

    @Column
    private Integer presentation;

    @Column
    private Integer discussion;

    @Column
    private float subjectRating;
}
