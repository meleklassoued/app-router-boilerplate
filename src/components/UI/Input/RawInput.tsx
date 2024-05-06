'use client';

import clsx from 'clsx';
import { forwardRef, HTMLInputTypeAttribute, useState } from 'react';
import EyeSlashSvg from './Icons/EyeSlashSvg';
import EyeSvg from './Icons/EyeSvg';

export type RawInputProps = {
  label?: string;
  labelClassName?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  name: string;
  innerWrapperClassName?: string;
  outerWrapperClassName?: string;
} & React.ComponentPropsWithRef<'input'> &
  React.ComponentPropsWithRef<'textarea'>;

const Input = forwardRef<HTMLInputElement, RawInputProps>(
  (
    {
      label,
      labelClassName,
      error,
      name,
      leftIcon,
      rightIcon,
      type = 'text',
      className,
      required,
      innerWrapperClassName,
      outerWrapperClassName,
      ...rest
    },
    ref,
  ) => {
    const isPassword = type === 'password';
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleToggleShowPassword = (): void => {
      setIsPasswordShown((prev) => !prev);
    };
    const fieldType = isPasswordShown ? 'text' : type;
    // TODO : add required styling when design is ready
    return (
      <div className={clsx(outerWrapperClassName)}>
        {label && (
          <label
            htmlFor={name}
            className={clsx('', error && '', labelClassName)}
          >
            {label}
            {required && <span className=""></span>}
          </label>
        )}
        <div className={clsx('flex', innerWrapperClassName)}>
          {leftIcon && <span>{leftIcon}</span>}
          <InputOrTextArea
            ref={ref}
            id={name}
            type={fieldType}
            className={clsx('', className, leftIcon && '', rightIcon && '')}
            {...rest}
          />
          {(isPassword || rightIcon) && (
            <button
              type="button"
              className={clsx(error && '', isPassword && 'cursor-pointer')}
              onClick={handleToggleShowPassword}
            >
              {isPassword ? (
                isPasswordShown ? (
                  <EyeSlashSvg />
                ) : (
                  <EyeSvg />
                )
              ) : (
                rightIcon
              )}
            </button>
          )}
        </div>
        {/* error message */}
        {error && <p className="">{error}</p>}
      </div>
    );
  },
);

export default Input;

const InputOrTextArea = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'> & React.ComponentPropsWithRef<'textarea'>
>(({ type, ...rest }, ref) => {
  if (type === 'textarea') {
    return (
      <textarea ref={ref as React.LegacyRef<HTMLTextAreaElement>} {...rest} />
    );
  }

  return <input ref={ref} type={type} {...rest} />;
});
