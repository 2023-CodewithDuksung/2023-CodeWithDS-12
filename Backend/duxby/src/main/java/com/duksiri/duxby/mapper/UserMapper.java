package com.duksiri.duxby.mapper;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.entity.UserEntity;

public class UserMapper {

    // UserEntity를 UserDTO로 변환하는 메서드
    public static UserDTO toUserDTO(UserEntity userEntity) {
        return UserDTO.builder()
                .userStudentNumber(userEntity.getUserStudentNumber())
                .userName(userEntity.getUserName())
                .userFirstMajor(userEntity.getUserFirstMajor())
                .userSecondMajor(userEntity.getUserSecondMajor())
                .firstMajorHard(userEntity.isFirstMajorHard())
                .secondMajorHard(userEntity.isSecondMajorHard())
                .requiredCourseCredit(userEntity.getRequiredCourseCredit())
                .a1Credit(userEntity.getA1Credit())
                .a2Credit(userEntity.getA2Credit())
                .a3Credit(userEntity.getA3Credit())
                .bCredit(userEntity.getBCredit())
                .cCredit(userEntity.getCCredit())
                .selfDesignCredit(userEntity.getSelfDesignCredit())
                .baseMajorCredit(userEntity.getBaseMajorCredit())
                .firstMajorCredit(userEntity.getFirstMajorCredit())
                .secondMajorCredit(userEntity.getSecondMajorCredit())
                .restCredit(userEntity.getRestCredit())
                .restSemester(userEntity.getRestSemester())
                .semester(userEntity.getSemester())
                .GECredit(userEntity.getGECredit())
                .totalCredit(userEntity.getTotalCredit())
                .gradePointAverage(userEntity.getGradePointAverage())
                .teamPlay(userEntity.isTeamPlay())
                .presentation(userEntity.isPresentation())
                .discussion(userEntity.isDiscussion())
                .build();
    }

    // UserDTO를 UserEntity로 변환하는 메서드
    public static UserEntity toUserEntity(UserDTO userDTO) {
        return UserEntity.builder()
                .userStudentNumber(userDTO.getUserStudentNumber())
                .userName(userDTO.getUserName())
                .userFirstMajor(userDTO.getUserFirstMajor())
                .userSecondMajor(userDTO.getUserSecondMajor())
                .firstMajorHard(userDTO.isFirstMajorHard())
                .secondMajorHard(userDTO.isSecondMajorHard())
                .requiredCourseCredit(userDTO.getRequiredCourseCredit())
                .a1Credit(userDTO.getA1Credit())
                .a2Credit(userDTO.getA2Credit())
                .a3Credit(userDTO.getA3Credit())
                .bCredit(userDTO.getBCredit())
                .cCredit(userDTO.getCCredit())
                .selfDesignCredit(userDTO.getSelfDesignCredit())
                .baseMajorCredit(userDTO.getBaseMajorCredit())
                .firstMajorCredit(userDTO.getFirstMajorCredit())
                .secondMajorCredit(userDTO.getSecondMajorCredit())
                .restCredit(userDTO.getRestCredit())
                .restSemester(userDTO.getRestSemester())
                .semester(userDTO.getSemester())
                .GECredit(userDTO.getGECredit())
                .totalCredit(userDTO.getTotalCredit())
                .gradePointAverage(userDTO.getGradePointAverage())
                .teamPlay(userDTO.isTeamPlay())
                .presentation(userDTO.isPresentation())
                .discussion(userDTO.isDiscussion())
                .build();
    }


}
