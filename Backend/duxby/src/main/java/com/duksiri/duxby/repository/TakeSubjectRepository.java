package com.duksiri.duxby.repository;

import com.duksiri.duxby.entity.TakeSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TakeSubjectRepository extends JpaRepository<TakeSubjectEntity, String> {

    // ID로 조회
    Optional<TakeSubjectEntity> findByTakeSubjectId(String takeSubjectId);

//    Optional<TakeSubjectEntity> findByUserStudentNumber(String userStudentNumber);
//
//    Optional<TakeSubjectEntity> findBySubjectCode(String subjectCode);

    @Query(value = "SELECT * FROM take_subject_table AS t " +
            "WHERE t.subject_code IN (:subject_code)"
            , nativeQuery = true)
    List<Map<String, Object>> findRequiredMajorSubjectCode(@Param("subject_code")String subject_code);

}
