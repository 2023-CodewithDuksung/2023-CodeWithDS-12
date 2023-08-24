package com.duksiri.duxby.repository;

import com.duksiri.duxby.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, String> {

    // 학번으로 학생 정보 조회 (select * from user_table where user_student_number=?)
    Optional<UserEntity> findByUserStudentNumber(String userStudentNumber);

}
