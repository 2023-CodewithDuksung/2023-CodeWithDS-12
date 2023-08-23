package com.duksiri.duxby.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserEntity is a Querydsl query type for UserEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserEntity extends EntityPathBase<UserEntity> {

    private static final long serialVersionUID = -146224139L;

    public static final QUserEntity userEntity = new QUserEntity("userEntity");

    public final NumberPath<Integer> a1Credit = createNumber("a1Credit", Integer.class);

    public final NumberPath<Integer> a2Credit = createNumber("a2Credit", Integer.class);

    public final NumberPath<Integer> a3Credit = createNumber("a3Credit", Integer.class);

    public final NumberPath<Integer> baseMajorCredit = createNumber("baseMajorCredit", Integer.class);

    public final NumberPath<Integer> bCredit = createNumber("bCredit", Integer.class);

    public final NumberPath<Integer> cCredit = createNumber("cCredit", Integer.class);

    public final BooleanPath discussion = createBoolean("discussion");

    public final NumberPath<Integer> firstMajorCredit = createNumber("firstMajorCredit", Integer.class);

    public final BooleanPath firstMajorHard = createBoolean("firstMajorHard");

    public final NumberPath<Integer> GECredit = createNumber("GECredit", Integer.class);

    public final NumberPath<Float> gradePointAverage = createNumber("gradePointAverage", Float.class);

    public final BooleanPath presentation = createBoolean("presentation");

    public final NumberPath<Integer> requiredCourseCredit = createNumber("requiredCourseCredit", Integer.class);

    public final NumberPath<Integer> secondMajorCredit = createNumber("secondMajorCredit", Integer.class);

    public final BooleanPath secondMajorHard = createBoolean("secondMajorHard");

    public final NumberPath<Integer> selfDesignCredit = createNumber("selfDesignCredit", Integer.class);

    public final BooleanPath teamPlay = createBoolean("teamPlay");

    public final NumberPath<Integer> totalCredit = createNumber("totalCredit", Integer.class);

    public final StringPath userFirstMajor = createString("userFirstMajor");

    public final StringPath userName = createString("userName");

    public final StringPath userSecondMajor = createString("userSecondMajor");

    public final StringPath userStudentNumber = createString("userStudentNumber");

    public QUserEntity(String variable) {
        super(UserEntity.class, forVariable(variable));
    }

    public QUserEntity(Path<? extends UserEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserEntity(PathMetadata metadata) {
        super(UserEntity.class, metadata);
    }

}

