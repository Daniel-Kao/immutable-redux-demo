import React from 'react';

const LockInput = ({ title, onChange }) => {
  setTimeout(() => {
    console.log(333);
    return <input type="text" onChange={onChange} value={title} />;
  }, 1000);
  return <input type="text" defaultValue="123123" />;
};

export default LockInput;
