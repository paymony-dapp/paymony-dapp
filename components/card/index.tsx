import React, { Fragment } from 'react';

const card = ({ onClick, children }: any) => {
  return (
    <div className='rounded-2xl bg p-6 my-4' onClick={onClick}>
      {children}
    </div>
  );
};

export default card;
