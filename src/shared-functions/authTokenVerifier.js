const { StatusCodes } = require('http-status-codes');

const authTokenVerifier = async () => {
  const VERIFY_TOKEN_ENDPOINT = 'http://localhost:4000/verify_token';
  const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

  if (loginInfo === null || !loginInfo) {
    return { isAuthTokenExpired: true };
  }

  const fetchedData = await fetch(VERIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: loginInfo.authToken,
    },
  });
  const { code } = await fetchedData.json();

  if (code === StatusCodes.OK) {
    return { isAuthTokenExpired: false };
  }
  return { isAuthTokenExpired: true };
};

export default authTokenVerifier;
