const { StatusCodes } = require('http-status-codes');

const authTokenVerifier = async () => {
  // const VERIFY_TOKEN_ENDPOINT = 'https://izi-tech-back.herokuapp.com/verify_token';
  const VERIFY_TOKEN_ENDPOINT_LOCAL = 'http://localhost:4000/verify_token';

  const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

  if (loginInfo === null || !loginInfo) {
    return { isAuthTokenExpired: true };
  }

  const fetchedData = await fetch(VERIFY_TOKEN_ENDPOINT_LOCAL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: loginInfo.authToken,
    },
  });
  const { code } = await fetchedData.json();

  if (code === StatusCodes.OK) {
    return { isAuthTokenExpired: false };
  }
  return { isAuthTokenExpired: true };
};

export default authTokenVerifier;
