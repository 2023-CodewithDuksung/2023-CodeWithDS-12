package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.UserDTO;
import com.duksiri.duxby.mapper.UserMapper;
import com.duksiri.duxby.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    // Repository 선언
    private final UserRepository userRepository;

    // 테이블에 데이터 저장 메소드
    public void saveUser(UserDTO userDTO) {
        // 1. dto -> entity 변환
        // 2. repository의 save 메소드 호출
        userRepository.save(UserMapper.toUserEntity(userDTO));
    }

    // 데이터 업데이트 메소드 (추후 추가)

}
