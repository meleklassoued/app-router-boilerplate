'use client';

import Checkbox from '@/components/UI/CheckBox';
import Input from '@/components/UI/Input';
import { FormProvider, useForm } from 'react-hook-form';

export default function About() {
  const formMethods = useForm({
    defaultValues: {
      test: 'test',
      check: true,
    },
  });
  return (
    <>
      <h1>Hello About Page </h1>
      <FormProvider {...formMethods}>
        <form>
          <Input name="test" placeholder="test placeholder" />
          <Checkbox
            name="check"
            className="bg-dak"
            label="check box for test"
            defaultChecked
          />
        </form>
      </FormProvider>
    </>
  );
}
