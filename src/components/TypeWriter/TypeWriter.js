import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const TypeWriterContainer = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  padding: 20px;
  background: #5DA9FF;
  min-height: 54px;
`;

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
`;

const TypeWriter = () => {
  const [text, setText] = useState('');
  const firstPart = "AI is here to stay.";
  const secondPart = "Are you?";
  const [phase, setPhase] = useState('first'); // first, pause, second, complete
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (phase === 'first') {
      if (index < firstPart.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + firstPart[index]);
          setIndex((prev) => prev + 1);
        }, 50); // Fast typing for first part
      } else {
        setPhase('pause');
        setIndex(0);
      }
    } 
    else if (phase === 'pause') {
      timeout = setTimeout(() => {
        setPhase('second');
      }, 1500); // 1.5 second pause after the period
    }
    else if (phase === 'second') {
      if (index < secondPart.length) {
        timeout = setTimeout(() => {
          setText(firstPart + ' ' + secondPart.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        }, 100); // Normal speed for second part
      } else {
        setPhase('complete');
      }
    }
    else if (phase === 'complete') {
      timeout = setTimeout(() => {
        setText('');
        setIndex(0);
        setPhase('first');
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index, phase]);

  return (
    <TypeWriterContainer>
      {text}<Cursor>|</Cursor>
    </TypeWriterContainer>
  );
};

export default TypeWriter; 