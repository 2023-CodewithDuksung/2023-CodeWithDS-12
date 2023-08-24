package com.duksiri.duxby.repository;

import com.duksiri.duxby.entity.SubjectEntity;
import com.duksiri.duxby.entity.TakeSubjectEntity;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

import static com.duksiri.duxby.entity.QTakeSubjectEntity.takeSubjectEntity;
import static com.duksiri.duxby.entity.QSubjectEntity.subjectEntity;
import static com.querydsl.jpa.JPAExpressions.select;

@Repository
@RequiredArgsConstructor
public class TakeSubjectRepositoryImpl implements TakeSubjectRepositoryCustom{

    @Autowired
    private final JPAQueryFactory queryFactory;

    @Autowired
    EntityManager em;


    @Override
    public List<TakeSubjectEntity> findRequireMajorSubjectCode(String subjectClassification, String major) {

         return queryFactory
                .selectFrom(takeSubjectEntity)
//                 .where(takeSubjectEntity.subjectCode.in(
//                         JPAExpressions.select(subjectEntity.subjectCode)
//                                 .from(subjectEntity)
//                                 .where(subjectEntity.subjectClassification.in(subjectClassification).and(subjectEntity.major.in(major))
//                         ))
                 .fetch();
    }
}
