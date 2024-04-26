'use client';
import clsx from 'clsx';
import { forwardRef, useId } from 'react';

export type RawCheckboxProps = {
  label: string;
  disabled?: boolean;
  error?: string;
  name: string;
} & Omit<React.ComponentPropsWithRef<'input'>, 'type'>;

const Checkbox = forwardRef<HTMLInputElement, RawCheckboxProps>(
  ({ label, error, name, className, ...rest }, ref) => {
    const id = useId();
    return (
      <div>
        <input
          className={clsx('', className)}
          type="checkbox"
          id={id}
          name={name}
          ref={ref}
          {...rest}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {error && <p className="text-red">{error}</p>}
      </div>
    );
  },
);
export default Checkbox;
