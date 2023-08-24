package com.duksiri.duxby.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSubjectEntity is a Querydsl query type for SubjectEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSubjectEntity extends EntityPathBase<SubjectEntity> {

    private static final long serialVersionUID = 1710199400L;

    public static final QSubjectEntity subjectEntity = new QSubjectEntity("subjectEntity");

    public final NumberPath<Integer> credit = createNumber("credit", Integer.class);

    public final NumberPath<Integer> discussion = createNumber("discussion", Integer.class);

    public final StringPath GEClassification = createString("GEClassification");

    public final StringPath grade = createString("grade");

    public final StringPath major = createString("major");

    public final NumberPath<Integer> presentation = createNumber("presentation", Integer.class);

    public final StringPath professor = createString("professor");

    public final NumberPath<Integer> semester = createNumber("semester", Integer.class);

    public final StringPath subjectClassification = createString("subjectClassification");

    public final StringPath subjectCode = createString("subjectCode");

    public final NumberPath<Float> subjectDifficulty = createNumber("subjectDifficulty", Float.class);

    public final NumberPath<Integer> subjectHour = createNumber("subjectHour", Integer.class);

    public final StringPath subjectName = createString("subjectName");

    public final NumberPath<Float> subjectRating = createNumber("subjectRating", Float.class);

    public final NumberPath<Integer> teamPlay = createNumber("teamPlay", Integer.class);

    public final NumberPath<Integer> year = createNumber("year", Integer.class);

    public QSubjectEntity(String variable) {
        super(SubjectEntity.class, forVariable(variable));
    }

    public QSubjectEntity(Path<? extends SubjectEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSubjectEntity(PathMetadata metadata) {
        super(SubjectEntity.class, metadata);
    }

}

