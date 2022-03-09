const mailValidator = (email) => { // REF: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  const validateMailRegex = /\S+@\S+\.\S+/;
  return validateMailRegex.test(email);
};

export default mailValidator;
