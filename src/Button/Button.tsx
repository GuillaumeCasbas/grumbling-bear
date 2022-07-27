import React from 'react';

type Props = {
  label: string
  onClick: () => void
};

const Button = ({ label, onClick }: Props) => (
  <button onClick={onClick} type='button'>
    {label}
  </button>
);

export default Button;
