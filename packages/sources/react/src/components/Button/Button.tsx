import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`grumblingbear-btn ${className ? className : ''}`}
        {...props}
      />
    );
  },
);

const MemoButton = React.memo(Button);

MemoButton.displayName = 'Button';

export default MemoButton;