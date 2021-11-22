type TFetchResponse<T = any> = {
  json<P = T>(): Promise<P>;
} & Response;

export type TRequestErrors = {
  response?: TFetchResponse;
} & Error;

export type TCustomHeaders = {
  clientid?: string;
  entitytype?: string;
  token?: string;
} & Headers;

const СheckStatus = async (response: TFetchResponse): Promise<TFetchResponse> => {
  if (response.ok) {
    return response;
  }
  const body = await response.json();
  const errorMessage = body.message || body.data?.error || body.error?.message || response.statusText;
  throw new Error(errorMessage);
};

export default async function fetchApi<Body>(
  url: string,
  headers: TCustomHeaders,
  method?: string,
  body?: any,
  statusChecker: (resp: Response) => Promise<TFetchResponse<Body>> = СheckStatus
): Promise<Body> {
  const userData = await fetch(`${url}`, {
    method: method || 'GET',
    headers,
    body:   JSON.stringify(body),
  });
  await statusChecker(userData);
  return userData.json();
}
