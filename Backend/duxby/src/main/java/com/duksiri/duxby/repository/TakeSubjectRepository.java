package com.duksiri.duxby.repository;

import com.duksiri.duxby.entity.TakeSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface TakeSubjectRepository extends JpaRepository<TakeSubjectEntity, String> {

    // ID로 조회
    Optional<TakeSubjectEntity> findByTakeSubjectId(String takeSubjectId);

//    Optional<TakeSubjectEntity> findByUserStudentNumber(String userStudentNumber);
//
//    Optional<TakeSubjectEntity> findBySubjectCode(String subjectCode);

}
