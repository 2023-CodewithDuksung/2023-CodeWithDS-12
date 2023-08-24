import React from 'react';
import { styled } from 'styled-components';

export default function BoxLayout({ content, subcontent, width, height, color, size, weight }) {
  return (
    <Table width={width} height={height} color={color} size={size} weight={weight}>
      {content} <SubContent> {subcontent}</SubContent>
    </Table>
  );
}

const Table = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: 1px solid #bbb;
  background-color: #f4f4f4;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: 1.6rem;

  align-content: center;
  size: ${({ size }) => size};
`;

const SubContent = styled.span`
  margin-left: 1rem;

  color: #66e2e2;
`;
