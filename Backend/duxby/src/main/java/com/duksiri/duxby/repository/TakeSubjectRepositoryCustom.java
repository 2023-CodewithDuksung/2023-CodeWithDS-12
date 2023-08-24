package com.duksiri.duxby.repository;

import com.duksiri.duxby.entity.TakeSubjectEntity;

import java.util.List;

public interface TakeSubjectRepositoryCustom {
    List<TakeSubjectEntity> findRequireMajorSubjectCode(String subjectClassification, String major);
}
