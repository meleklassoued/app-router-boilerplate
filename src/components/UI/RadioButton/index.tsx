'use client';

import { validateForm } from '@/lib/field-validator/helpers/validateForm';
import { TRule } from '@/lib/field-validator/types';
import get from '@/lib/get';
import { FieldError, useFormContext, useFormState } from 'react-hook-form';
import RawRadioButton, { RawRadioButtonProps } from './RawRadioButton';
export interface RadioButtonProps extends Omit<RawRadioButtonProps, 'error'> {
  validate?: TRule[];
  displayName?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  validate,
  displayName,
  ...props
}) => {
  const { register } = useFormContext();
  const { errors } = useFormState();
  const error = get(errors, props.name) as FieldError | undefined;
  return (
    <RawRadioButton
      {...register(props.name, {
        validate: validateForm(props.name, validate || [], displayName),
      })}
      error={error?.message}
      {...props}
    />
  );
};

export default RadioButton;
