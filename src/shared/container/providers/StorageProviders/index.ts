import { container } from 'tsyringe';

import DiskStorageProvider from './implementations/DiskStorageProvider';

import IStorageProvider from './models/IStorageProvider';

const providers = {
  diskStorageProvider: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.diskStorageProvider,
);
