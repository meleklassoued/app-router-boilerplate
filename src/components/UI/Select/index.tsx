'use client';
import { validateForm } from '@/lib/field-validator/helpers/validateForm';
import { TRule } from '@/lib/field-validator/types';
import get from '@/lib/get/index';
import {
  Controller,
  FieldError,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import RawSelect, { IRawSelectProps } from './RawSelect';
export interface ISelectProps
  extends Omit<IRawSelectProps, 'onChange' | 'value' | 'error'> {
  validate?: TRule[];
  displayName?: string;
  name: string;
}

const Select: React.FC<ISelectProps> = ({
  validate,
  className,
  displayName,
  ...props
}) => {
  const { control, getValues } = useFormContext();
  const { errors } = useFormState();
  const error = get(errors, props.name) as FieldError | undefined;
  return (
    <Controller
      rules={{
        validate: validateForm(props.name, validate || [], displayName),
      }}
      control={control}
      name={props.name}
      defaultValue={props.initialValue || getValues(props.name)}
      render={({ field: { onChange, value, ref } }) => (
        <RawSelect
          onChange={onChange}
          className={`${className}`}
          ref={ref}
          initialValue={getValues(props.name)}
          value={value}
          error={error?.message}
          {...props}
        />
      )}
    ></Controller>
  );
};
export default Select;
export * from './types';
