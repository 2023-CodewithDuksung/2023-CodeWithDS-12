import React, { useEffect, useState, useRef } from 'react';
import { styled } from 'styled-components';

export default function ConditionalSelectBox({ optionData, setSelectedValue }) {
  const [currentValue, setCurrentValue] = useState('선택');
  const [showOptions, setShowOptions] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const selectRef = useRef(null);
  useEffect(() => {
    if (optionData.find((data) => data.text === '전체')) {
      setCurrentValue('전체');
    }
  }, []);
  useEffect(() => {
    // Function to handle outside clicks
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    // Add a click event listener to window when options are shown
    if (showOptions) {
      window.addEventListener('click', handleClickOutside);
    }

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);
  function handleOnChangeSelectValue(e) {
    setCurrentValue(e.target.getAttribute('text'));
    setSelectedValue(e.target.getAttribute('value'));
  }
  function handleOptions() {
    setIsIconRotated((prev) => !prev);
    setShowOptions((prev) => !prev);
  }

  return (
    <ConditionalSelectContianer onClick={handleOptions} isRotated={isIconRotated} ref={selectRef}>
      {' '}
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {optionData &&
          optionData.map((data) => (
            <Option key={data.key} value={data.value} text={data.text} onClick={handleOnChangeSelectValue}>
              {data.text}
            </Option>
          ))}
      </SelectOptions>
    </ConditionalSelectContianer>
  );
}

const ConditionalSelectContianer = styled.div`
  width: 17rem;
  height: 4rem;
  border: 2px solid #bbb;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.5rem;
  &::before {
    content: '▼';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.3rem;
    transform: ${(props) => (props.isRotated ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.5s ease;
  }
`;
const Label = styled.label`
  font-size: 1.4rem;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 4rem;
  left: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  border: ${(props) => (props.show ? '2px solid #bbb' : 'none')};
  background-color: #fff;
  color: #222222;
`;
const Option = styled.li`
  font-size: 1.4rem;
  padding: 1rem;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #22bcbc;
    color: #fff;
  }
`;
