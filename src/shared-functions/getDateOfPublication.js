const getDateOfPublication = () => {
  const completeDate = new Date(); // Thu Dec 09 2021 08:22:25 GMT-0300 (Horário Padrão de Brasília).
  const day = String(completeDate.getDate()).padStart(2, '0'); // Caso seja dia 1 à 9, um 0 será adicionado. Resultado: 01, 02, 03....
  const month = String(completeDate.getMonth() + 1).padStart(2, '0'); // Caso seja mês 1 à 9, um 0 será adicionado. Resultado: 01, 02, 03....
  const year = completeDate.getFullYear(); // 2021
  return `${day}/${month}/${year}`;
};

export default getDateOfPublication;
