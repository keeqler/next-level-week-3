import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

type Schemas = {
  body?: Yup.ObjectSchema;
  params?: Yup.ObjectSchema;
  query?: Yup.ObjectSchema;
};
type Inputs = 'body' | 'query' | 'params';

export function validateInputs(schemas: Schemas) {
  return async (request: Request, response: Response, next: NextFunction) => {
    for (const input of Object.keys(schemas)) {
      await (schemas[input as Inputs] as Yup.ObjectSchema).validate(request[input as Inputs], {
        abortEarly: false
      });
    }

    next();
  };
}
