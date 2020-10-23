import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { CSSProperties, StyledComponentProps } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import InputError from '@/components/InputError';
import { InputLabel } from '@/components/InputLabel';

import * as s from './styles';

type InputTypes = 'text' | 'password' | 'email' | 'tel';
type Props = StyledComponentProps<'input', any, { type: InputTypes }, 'type'> & {
  name: string;
  label: string;
  mask?: string;
  isTextArea?: boolean;
  style?: CSSProperties;
};

const TextInput: FC<Props> = ({ name, label, mask, isTextArea, style, ...props }: Props) => {
  const { register, errors, control, formState } = useFormContext();

  const valueIsValid = !errors[name];
  const fieldIsTouched = formState.touched[name];
  let validationState: 'neutral' | 'valid' | 'invalid';

  if (valueIsValid && fieldIsTouched) {
    validationState = 'valid';
  } else if (!valueIsValid && fieldIsTouched) {
    validationState = 'invalid';
  } else {
    validationState = 'neutral';
  }

  const Input = isTextArea ? s.TextArea : s.Input;

  return (
    <s.Container style={style}>
      <InputLabel>{label}</InputLabel>

      {/* Input with mask */}
      {mask && (
        <Controller
          as={props => <s.InputWithMask validationState={validationState} {...props} />}
          control={control}
          name={name}
          mask={mask}
          defaultValue=""
          {...(props as any)}
        />
      )}

      {/* Input without mask */}
      {!mask && (
        <Input name={name} ref={register} validationState={validationState} {...(props as any)} />
      )}

      {/* Error message */}
      <AnimatePresence>
        {!valueIsValid && (
          <motion.div
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <InputError message={errors[name]?.message} />
          </motion.div>
        )}
      </AnimatePresence>
    </s.Container>
  );
};

export default TextInput;
