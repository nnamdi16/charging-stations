import axios from 'axios';

export async function sendRequestToAPI(
  path: string,
  data: any,
  headers: any,
  method = 'GET',
) {
  const request: any = {
    url: `${path}`,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  if (data) {
    request.data = data;
  }
  try {
    const response = await axios(request);
    // console.log(response);
    return response;
  } catch (error) {
    return {
      status: 'fail',
      message: null,
      data: null,
      error: error?.response?.data,
    };
  }
}
