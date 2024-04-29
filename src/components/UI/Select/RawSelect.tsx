'use client';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { forwardRef } from 'react';
import Shevron from './Shevron';
import { ISelectOption } from './types';
import { useSelectInput } from './useSelectInput';
export interface IRawSelectProps<T = string> {
  options: ISelectOption<T>[];
  onChange?: (value: ISelectOption) => void;
  initialValue?: this['options'][number];
  label?: string;
  placeholder?: string;
  error?: string;
  value?: ISelectOption<T> | undefined;
  className?: string;
  itemClassName?: string;
  triggger?: JSX.Element;
  trigger?: JSX.Element;
  renderChildren?: (value: ISelectOption<T>) => JSX.Element;
}

const RawSelect = forwardRef<HTMLButtonElement, IRawSelectProps>(
  (
    {
      options,
      onChange,
      initialValue,
      label,
      value,
      error,
      placeholder,
      className,
      trigger,
      renderChildren,
      itemClassName,
    },
    ref,
  ) => {
    const { handleSelectionChange, isOpen, toggleOpenSelectOptions } =
      useSelectInput({
        onChange,
        initialValue,
        value,
      });
    return (
      <DropdownMenuPrimitive.Root onOpenChange={toggleOpenSelectOptions}>
        {label && (
          <DropdownMenuPrimitive.Label
            className={clsx('mb-2 block text-sm', error && '')}
          >
            {label}
          </DropdownMenuPrimitive.Label>
        )}
        <DropdownMenuPrimitive.Trigger ref={ref} asChild>
          {trigger || (
            <button
              className={clsx([
                className,
                'flex',
                'cursor-pointer',
                'items-center justify-between',
                'rounded border',
                !error && 'text-black',
                error && 'border-red-500 bg-red-50 text-red-600',
              ])}
              onClick={() => toggleOpenSelectOptions(!isOpen)}
            >
              <p className="py-3 pl-3 text-sm leading-3 tracking-normal">
                {value?.label || initialValue?.label || placeholder}
              </p>
              <Shevron />
            </button>
          )}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={clsx('bg-white dark:bg-gray-700')}
        >
          {options.map((option) => (
            <DropdownMenuPrimitive.Item
              onSelect={() => handleSelectionChange(option)}
              key={option.value}
              className={clsx(
                itemClassName || [
                  'cursror-default flex select-none text-gray-500',
                  option.value === value?.value && 'bg-gray-300',
                ],
              )}
            >
              {renderChildren ? (
                renderChildren(option)
              ) : (
                <span className="flex-grow text-sm text-gray-700">
                  {option.label}
                </span>
              )}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    );
  },
);

export default RawSelect;
