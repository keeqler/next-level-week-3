import multer from 'multer';
import path from 'path';
import util from 'util';
import crypto from 'crypto';

export const multerConfig: multer.Options = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: async (request, file, callback) => {
      const filename = (await util.promisify(crypto.randomBytes)(16)).toString('hex');

      callback(null, filename);
    }
  })
};
