/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { ISelectOption } from './types';

export interface Iprops {
  onChange?: (value: ISelectOption) => void;
  initialValue?: ISelectOption;
  value?: ISelectOption;
}
export const useSelectInput = ({ onChange, initialValue, value }: Iprops) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenSelectOptions = (open: boolean) => setIsOpen(open);
  const handleSelectionChange = (changedValue: ISelectOption) => {
    toggleOpenSelectOptions(false);
    onChange?.(changedValue);
  };

  useEffect(() => {
    if (initialValue && initialValue?.value !== value?.value)
      onChange?.(initialValue);
  }, [initialValue]);

  return {
    handleSelectionChange,
    toggleOpenSelectOptions,
    isOpen,
  };
};
