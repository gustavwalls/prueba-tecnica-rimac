import React from 'react'

interface ErrorProps {
  children: React.ReactNode;
}

function Error({ children }: ErrorProps) {
  return (
    <p className='text_error'>{children}</p>
  );
}

export default Error;
