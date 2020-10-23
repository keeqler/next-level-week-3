import React, { ReactElement, ReactNode } from 'react';
import { FormProvider, UnpackNestedValue, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { ObjectSchema } from 'yup';
import { CSSProperties } from 'styled-components';

type Props<Inputs> = {
  onSubmit: (inputs: UnpackNestedValue<Inputs>) => void;
  schema: ObjectSchema<Record<string, any> | undefined, Record<string, any>>;
  defaultValues?: Record<string, any>;
  style?: CSSProperties;
  children: ReactNode;
};

function Form<Inputs>({
  onSubmit,
  schema,
  defaultValues,
  style,
  children
}: Props<Inputs>): ReactElement {
  const formMethods = useForm({ resolver: yupResolver(schema), mode: 'onBlur', defaultValues });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} style={style}>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
