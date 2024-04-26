import clsx from 'clsx';
import { forwardRef } from 'react';

export type TRadioButton = {
  value: string;
  label: string;
};

export type RawRadioButtonProps = {
  values: TRadioButton[];
  error?: string;
  name: string;
  rowClassName?: string;
} & Omit<React.ComponentPropsWithRef<'input'>, 'type'>;

const RawRadioButton = forwardRef<HTMLInputElement, RawRadioButtonProps>(
  ({ error, name, className, values, rowClassName, ...rest }, ref) => (
    <div className="items-start">
      <div>
        <div className={clsx(rowClassName)}>
          {values.map((o, i) => (
            <div key={o.value}>
              <div className="mb-2 mr-2 flex items-center">
                <input
                  defaultChecked={i === 0}
                  name={name}
                  type="radio"
                  className={clsx('', className)}
                  value={o.value}
                  id={o.label}
                  ref={ref}
                  {...rest}
                />
                <label htmlFor={o.label}>{o.label}</label>
              </div>
            </div>
          ))}
        </div>
        {error && <p className="">{error}</p>}
      </div>
    </div>
  ),
);

export default RawRadioButton;
