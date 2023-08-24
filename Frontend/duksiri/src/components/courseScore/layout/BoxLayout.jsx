import React, { Children } from 'react';
import { styled } from 'styled-components';

export default function BoxLayout({ content, width, height, color, size, weight }) {
  return (
    <Table width={width} height={height} color={color} size={size} weight={weight}>
      {content}
    </Table>
  );
}

const Table = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  size: ${({ size }) => size};

  border: 1px solid #bbb;
  background-color: #f4f4f4;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: 1.6rem;
`;
