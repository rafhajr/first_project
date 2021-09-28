import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';
import { request } from 'express';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk'

  directory: string,
  uploadsFolder: string,

  multer: {
    storage: StorageEngine;
  },

  config: {
    disk: {}
    aws: {
      bucket: string,
    }
  }
}

export default {
  driver: process.env.STORAGE_DRIVER,

  directory: tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber-2',
    },
  },

} as IUploadConfig;
