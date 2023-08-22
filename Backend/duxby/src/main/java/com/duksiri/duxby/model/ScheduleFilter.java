package com.duksiri.duxby.model;

import lombok.Data;

@Data
public class ScheduleFilter {
    // 클라이언트는 모델의 멤버변수명과 동일하게 요청
    private String subjectClassification;

    private String major;

    private int grade;

    private boolean presentation;

    private boolean teamPlay;

    private boolean discussion;

}
