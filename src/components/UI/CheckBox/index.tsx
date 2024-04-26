import { validateForm } from '@/lib/field-validator/helpers/validateForm';
import { TRule } from '@/lib/field-validator/types';
import get from '@/lib/get/index';
import { FieldError, useFormContext, useFormState } from 'react-hook-form';
import RawCheckbox, { RawCheckboxProps } from './RawCheckbox';
export interface CheckboxProps extends RawCheckboxProps {
  validate?: TRule[];
  displayName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  validate,
  displayName,
  ...props
}) => {
  const { register } = useFormContext();
  const { errors } = useFormState();
  const error = get(errors, props.name) as FieldError | undefined;
  return (
    <RawCheckbox
      {...register(props.name, {
        validate: validateForm(props.name, validate || [], displayName),
      })}
      {...props}
      error={error?.message}
    />
  );
};
export default Checkbox;
