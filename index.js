const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function isLetter(c) {
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];

    if (letter === c) {
      return true
    }

    return false;
  }

function isSameCase(c1, c2) {
  const isFirstLowerCase = isLowerCase(c1);    
  const isSecondLowerCase = isLowerCase(c2);  

  if (isFirstLowerCase && isSecondLowerCase) {
    return true;
  }

  return false;
}

function sameCase(a, b){
  const isFirstValueLatter = isLetter(a);
  const isSecondValueLatter = isLetter(a);

  if (!isFirstValueLatter && !isSecondValueLatter) {
    return -1;
  }
  
  return 0;
}

console.log(sameCase('2', '1'));

module.exports = sameCase;