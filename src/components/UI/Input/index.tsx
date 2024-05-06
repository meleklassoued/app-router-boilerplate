import { forwardRef } from 'react';
import { FieldError, useFormContext, useFormState } from 'react-hook-form';

import { validateForm } from '@/lib/field-validator/helpers/validateForm';
import { TRule } from '@/lib/field-validator/types';
import get from '@/lib/get/index';

import RawInput, { RawInputProps } from './RawInput';
export interface InputProps extends RawInputProps {
  validate?: TRule[];
  displayName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ validate, displayName, ...props }, forwardedRef) => {
    const { register } = useFormContext();
    const { errors } = useFormState();
    const error = get(errors, props.name) as FieldError | undefined;

    const { ref: registerRef, ...registerRest } = register(props.name, {
      validate: validateForm(props.name, validate || [], displayName),
    });

    return (
      <RawInput
        {...registerRest}
        ref={(ref) => {
          registerRef(ref);
          if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
              forwardedRef(ref);
            } else {
              forwardedRef.current = ref;
            }
          }
        }}
        {...props}
        error={error?.message}
      />
    );
  },
);

export default Input;
