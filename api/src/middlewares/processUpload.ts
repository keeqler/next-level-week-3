import multer from 'multer';

import { multerConfig } from '@/config/multer';

export const processUpload = multer(multerConfig);
