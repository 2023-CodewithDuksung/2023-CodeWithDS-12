package com.duksiri.duxby.repository;


import com.duksiri.duxby.entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface SubjectRepository extends JpaRepository<SubjectEntity, String> {



    // 교과목 코드로 강의 조회 (select * from subject_table where user_student_number=?)
    Optional<SubjectEntity> findBySubjectCode(String subjectCode);

    @Query(value = "SELECT * FROM subject_table AS s left join take_subject_table AS t ON t.subject_code = s.subject_code " +
            "WHERE t.user_student_number = :id " +
            "AND s.subject_classification IN (:subject_classification)",
    nativeQuery = true)
    List<Map<String, Object>> findGEsubject(@Param("id")String id, @Param("subject_classification")List<String> subject_classification);
}
