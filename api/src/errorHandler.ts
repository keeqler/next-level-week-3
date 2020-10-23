import util from 'util';
import fs from 'fs';
import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import {} from 'multer';

async function deleteUploadedFiles(files: Express.Multer.File[]) {
  for (const file of files) {
    await util.promisify(fs.unlink)(file.path);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = async (error, request, response, next) => {
  if (request.files) {
    await deleteUploadedFiles(request.files as Express.Multer.File[]);
  }

  if (error instanceof ValidationError) {
    const errors: Record<string, string[]> = {};

    error.inner.forEach(valError => {
      errors[valError.path] = valError.errors;
    });

    return response.status(400).send(errors);
  }

  response.sendStatus(500);
};
