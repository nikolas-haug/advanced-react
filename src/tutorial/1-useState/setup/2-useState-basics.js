import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random text');

  const handleClick = () => {
    if(text === 'random text') {
      setText('hello world');
    } else {
      setText('random text');
    }
  }
  return (
      <React.Fragment>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>change title</button>
      </React.Fragment>
    )
};

export default UseStateBasics;
