function removeAccentFromWord(word) {
  word = word.replace(/[ÀÁÂÃÄÅ]/, 'A');
  word = word.replace(/[àáâãäå]/, 'a');
  word = word.replace(/[ÈÉÊË]/, 'E');
  word = word.replace(/[èéêë]/, 'e');
  word = word.replace(/[ÌÍÎÏ]/, 'I');
  word = word.replace(/[ìíîï]/, 'i');
  word = word.replace(/[ÒÓÔÕÖ]/, 'O');
  word = word.replace(/[òóôõö]/, 'o');
  word = word.replace(/[ÙÚÛÜ]/, 'U');
  word = word.replace(/[ùúûü]/, 'u');
  word = word.replace(/[Ñ]/, 'N');
  word = word.replace(/[ñ]/, 'n');
  return word;
}

function getLCArrayWithoutAccent(sentence) { // Retorna um array de palavras sem acentos e em letra minúscula.
  const sentenceInFormOfArray = sentence.toLowerCase().split(' ');
  return sentenceInFormOfArray.map((word) => removeAccentFromWord(word));
}

export default getLCArrayWithoutAccent;
