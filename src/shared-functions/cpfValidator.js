const cpfValidator = (cpf) => {
  const validateCpfRegex = /(\d{3}).(\d{3}).(\d{3})-(\d{2})/;
  return validateCpfRegex.test(cpf);
};

export default cpfValidator;
