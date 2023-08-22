package com.duksiri.duxby.repository;


import com.duksiri.duxby.entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubjectRepository extends JpaRepository<SubjectEntity, String> {

    // 교과목 코드로 강의 조회 (select * from subject_table where user_student_number=?)
    Optional<SubjectEntity> findBySubjectCode(String subjectCode);
}
