const cellphoneValidator = (cellphone) => {
  const validateCellphoneRegex = /\((\d{2})\) (\d{5})-(\d{4})/;
  return validateCellphoneRegex.test(cellphone);
};

export default cellphoneValidator;
