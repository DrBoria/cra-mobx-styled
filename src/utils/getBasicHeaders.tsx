import { TCustomHeaders } from './fetch';

export const headers: TCustomHeaders = new Headers();

export default (): TCustomHeaders => {
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  return headers;
};
