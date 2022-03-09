const passwordValidator = (password) => { // REF: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
  const validatePwRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
  // - (?=.*[a-z]): No mínimo uma letra minúscula.
  // - (?=.*[A-Z]): No mínimo uma letra maiúscula.
  // - (?=.*[0-9]): No mínimo um número.
  // - (?=.*[0-9]): No mínimo 6 caracteres.
  return validatePwRegex.test(password);
};

export default passwordValidator;
