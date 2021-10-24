import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

// *********************************************************
// ********************* API TYPES *************************
// *********************************************************
export type TDemoCredentials = any;

export type TDemoResponse = any;

// *********************************************************
// ********************* API ENDPOINTS *********************
// *********************************************************
const DEMO_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_DEMO}`;

// *********************************************************
// ********************* API QUERIES ***********************
// *********************************************************

/**
 * This is demo query
 * @param demoCredentials
 */
export const demoQuery = async (demoCredentials: TDemoCredentials): Promise<TDemoResponse> => {
  const headers = getBasicHeaders();
  const response: TDemoResponse = await fetchApi(DEMO_URL, headers, 'POST', demoCredentials);
  return response;
};
