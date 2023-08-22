package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.TakeSubjectDTO;
import com.duksiri.duxby.mapper.TakeSubjectMapper;
import com.duksiri.duxby.repository.TakeSubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TakeSubjectService {

    private final TakeSubjectRepository takeSubjectRepository;

    public void saveTakeSubject(TakeSubjectDTO takeSubjectDTO) {
        takeSubjectRepository.save(TakeSubjectMapper.toTakeSubjectEntity(takeSubjectDTO));
    }
}
