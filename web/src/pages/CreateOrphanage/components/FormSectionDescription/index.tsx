import React, { FC } from 'react';

import * as s from './styles';

type Props = { description: string };

const FormSectionDescription: FC<Props> = ({ description }: Props) => {
  return (
    <>
      <s.Description>{description}</s.Description>
      <s.SeparatorLine />
    </>
  );
};

export default FormSectionDescription;
