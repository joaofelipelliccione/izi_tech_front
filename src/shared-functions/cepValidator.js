const cepValidator = (cep) => {
  const validateCepRegex = /(\d{5})-(\d{3})/;
  return validateCepRegex.test(cep);
};

export default cepValidator;
