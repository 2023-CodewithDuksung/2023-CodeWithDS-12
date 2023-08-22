package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.SubjectDTO;
import com.duksiri.duxby.mapper.SubjectMapper;
import com.duksiri.duxby.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubjectService {

    // repository 선언
    private final SubjectRepository subjectRepository;

    // 테이블에 데이터 저장 메소드
    public void saveSubject(SubjectDTO subjectDTO) {
        subjectRepository.save(SubjectMapper.toSubjectEntity(subjectDTO));
    }

}
