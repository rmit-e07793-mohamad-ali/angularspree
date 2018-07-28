import { DEFAULT_CONFIG } from './../config/default';

export const environment = {
  production: false,
  apiEndpoint: DEFAULT_CONFIG.prodApiEndpoint || 'http://localhost:3000/',
  appName: DEFAULT_CONFIG.appName,
  config: DEFAULT_CONFIG
};
