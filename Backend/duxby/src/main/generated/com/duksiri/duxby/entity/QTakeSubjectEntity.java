package com.duksiri.duxby.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTakeSubjectEntity is a Querydsl query type for TakeSubjectEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTakeSubjectEntity extends EntityPathBase<TakeSubjectEntity> {

    private static final long serialVersionUID = -889807711L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTakeSubjectEntity takeSubjectEntity = new QTakeSubjectEntity("takeSubjectEntity");

    public final NumberPath<Integer> completionGrade = createNumber("completionGrade", Integer.class);

    public final NumberPath<Integer> completionSemester = createNumber("completionSemester", Integer.class);

    public final QSubjectEntity subjectCode;

    public final StringPath takeSubjectId = createString("takeSubjectId");

    public final QUserEntity userStudentNumber;

    public QTakeSubjectEntity(String variable) {
        this(TakeSubjectEntity.class, forVariable(variable), INITS);
    }

    public QTakeSubjectEntity(Path<? extends TakeSubjectEntity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTakeSubjectEntity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTakeSubjectEntity(PathMetadata metadata, PathInits inits) {
        this(TakeSubjectEntity.class, metadata, inits);
    }

    public QTakeSubjectEntity(Class<? extends TakeSubjectEntity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.subjectCode = inits.isInitialized("subjectCode") ? new QSubjectEntity(forProperty("subjectCode")) : null;
        this.userStudentNumber = inits.isInitialized("userStudentNumber") ? new QUserEntity(forProperty("userStudentNumber")) : null;
    }

}

