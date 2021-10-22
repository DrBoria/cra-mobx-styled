import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

// *********************************************************
// ********************* API TYPES *************************
// *********************************************************
export interface IAdminCredentials {
  email: string;
  password: string;
}

export interface ILoginAdminResponse {
  token: {
    accessToken: string;
    username: string;
  };
}

// *********************************************************
// ********************* API ENDPOINTS *********************
// *********************************************************
const LOGIN_URL: string = `${process.env.REACT_APP_BASIC_URL}/${process.env.REACT_APP_LOGIN}`;

// *********************************************************
// ********************* API QUERIES ***********************
// *********************************************************

/**
 * Login admin with email and password
 * @param studentData
 */
export const loginAdminQuery = async (studentData: IAdminCredentials): Promise<ILoginAdminResponse> => {
  const headers = getBasicHeaders();
  const response: ILoginAdminResponse = await fetchApi(LOGIN_URL, headers, 'POST', studentData);
  return response;
};
