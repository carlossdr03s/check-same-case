const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function isLetter(c) {
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];

    if (letter === c) {
      return true
    }

    return false;
  }
}

function sameCase(a, b){
    return 0;
  }