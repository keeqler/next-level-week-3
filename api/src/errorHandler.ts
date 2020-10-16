import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: Record<string, string[]> = {};

    error.inner.forEach(valError => {
      errors[valError.path] = valError.errors;
    });

    return response.status(400).send(errors);
  }

  console.error(error);

  response.sendStatus(500);
};
