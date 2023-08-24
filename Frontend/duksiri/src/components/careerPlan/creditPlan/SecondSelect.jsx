import React from 'react';
import { styled } from 'styled-components';

export default function CareerSelect({ selectedValue, onSelectionChange }) {
    return (
        <CareerSelectWrapper>
            <T>희망 커리어</T>
            <Select value={selectedValue} onChange={onSelectionChange}>
                <option value="none">없음</option>
                <option value="exchange">파견(교환/방문)학생</option>
                <option value="practicum">현장실습</option>
                <option value="internship">덕성인턴십</option>
            </Select>
        </CareerSelectWrapper>
    );
}

const CareerSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem 2rem 2rem 0;
`;

const T = styled.h3`
    color: #BBBBBB;
    font-weight: 700;
    font-size: 2rem;
`;

const Select = styled.select`
    border: 3px solid #BBBBBB;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    width: 20rem;
    margin-right: 35rem;
`;