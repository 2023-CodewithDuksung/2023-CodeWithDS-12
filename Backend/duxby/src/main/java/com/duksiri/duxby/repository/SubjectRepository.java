package com.duksiri.duxby.repository;


import com.duksiri.duxby.entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface SubjectRepository extends JpaRepository<SubjectEntity, String> {



    // 교과목 코드로 강의 조회 (select * from subject_table where user_student_number=?)
    Optional<SubjectEntity> findBySubjectCode(String subjectCode);

    // 수강한 교양 과목 불러오기
    @Query(value = "SELECT * FROM subject_table AS s left join take_subject_table AS t ON t.subject_code = s.subject_code " +
            "WHERE t.user_student_number = :id " +
            "AND s.subject_classification IN (:subject_classification)" +
            "ORDER BY t.completion_grade asc, t.completion_semester asc",
    nativeQuery = true)
    List<Map<String, Object>> findGESubject(@Param("id")String id, @Param("subject_classification")List<String> subject_classification);

    // 수강한 전탐 과목 불러오기
    @Query(value = "SELECT * FROM subject_table AS s left join take_subject_table AS t ON t.subject_code = s.subject_code " +
            "WHERE t.user_student_number = :id " +
            "AND s.subject_classification IN (:subject_classification)" +
            "ORDER BY t.completion_grade asc, t.completion_semester asc",
            nativeQuery = true)
    List<Map<String, Object>> findBaseMajorSubject(@Param("id")String id, @Param("subject_classification")String subject_classification);

    // 수강한 1전공 불러오기
    @Query(value = "SELECT * FROM subject_table AS s left join take_subject_table AS t ON t.subject_code = s.subject_code " +
            "WHERE t.user_student_number = :id " +
            "AND s.major IN (:first_major)" +
            "AND s.subject_classification NOT IN (:subject_classification)" +
            "ORDER BY t.completion_grade asc, t.completion_semester asc",
            nativeQuery = true)
    List<Map<String, Object>> findFirstMajorSubject(@Param("id")String id,@Param("subject_classification")String subject_classification, @Param("first_major")String first_major);

    // 수강한 2전공 불러오기
    @Query(value = "SELECT * FROM subject_table AS s left join take_subject_table AS t ON t.subject_code = s.subject_code " +
            "WHERE t.user_student_number = :id " +
            "AND s.major IN (:second_major)" +
            "AND s.subject_classification NOT IN (:subject_classification)" +
            "ORDER BY t.completion_grade asc, t.completion_semester asc",
            nativeQuery = true)
    List<Map<String, Object>> findSecondMajorSubject(@Param("id")String id,@Param("subject_classification")String subject_classification, @Param("second_major")String second_major);
}
