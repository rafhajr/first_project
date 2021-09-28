import { container } from 'tsyringe';

import upload from '@config/upload';
import DiskStorageProvider from './implementations/DiskStorageProvider';

import IStorageProvider from './models/IStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[upload.driver],
);
