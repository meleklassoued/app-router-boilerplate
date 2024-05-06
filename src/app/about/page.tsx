'use client';

import Checkbox from '@/components/UI/CheckBox';
import Input from '@/components/UI/Input';
import RadioButton from '@/components/UI/RadioButton';
import Select from '@/components/UI/Select';
import { FormProvider, useForm } from 'react-hook-form';
export default function About() {
  const formMethods = useForm({
    defaultValues: {
      test: 'test',
      check: true,
      radio: 'f',
    },
  });

  return (
    <>
      <h1>Hello About Page </h1>
      <div className="mx-auto lg:max-w-xl">
        <FormProvider {...formMethods}>
          <form>
            <Input name="test" placeholder="test placeholder" />
            <Checkbox
              name="check"
              className="bg-dak"
              label="check box for test"
              defaultChecked
            />
            <RadioButton
              name="radio"
              values={[
                { value: 'f', label: 'Female' },
                {
                  value: 'm',
                  label: 'Male',
                },
              ]}
            />
            <Select
              placeholder="Select placeholder"
              label="Select Label"
              validate={[{ rule: 'exists' }]}
              name="selection"
              options={[
                { label: 'English', value: 'en' },
                { label: 'Français', value: 'fr' },
              ]}
            />
          </form>
        </FormProvider>
      </div>
    </>
  );
}
