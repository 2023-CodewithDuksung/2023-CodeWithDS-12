package com.duksiri.duxby.service;

import com.duksiri.duxby.dto.TakeSubjectDTO;
import com.duksiri.duxby.entity.TakeSubjectEntity;
import com.duksiri.duxby.mapper.TakeSubjectMapper;
import com.duksiri.duxby.repository.TakeSubjectRepository;
import com.duksiri.duxby.repository.TakeSubjectRepositoryCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TakeSubjectService {

    private final TakeSubjectRepository takeSubjectRepository;
    private final TakeSubjectRepositoryCustom takeSubjectRepositoryCustom;

    public void saveTakeSubject(TakeSubjectDTO takeSubjectDTO) {
        takeSubjectRepository.save(TakeSubjectMapper.toTakeSubjectEntity(takeSubjectDTO));
    }
    public List<Map<String, Object>> getRequiredMajorSubject(String subjectCode) {
        return takeSubjectRepository.findRequiredMajorSubjectCode(subjectCode);
    }

}
