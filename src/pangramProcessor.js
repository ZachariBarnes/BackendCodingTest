const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// This function accepts a string and determines what letters are missing
export const getMissingLetters = ((pangram = '') => {
  const input = pangram.toLowerCase();
  // before anaylzing the string, all letters are missing
  let result = alphabet;
  // For performace iterate over the shorter of the two strings (alphabet || pangram)
  if (input.length < alphabet.length) {
    // For each character in our string, remove it from the result if present
    for (let i = 0; i < input.length; i += 1) {
      const character = input.charAt(i);
      if (result.includes(character)) {
        result = result.replace(character, '');
      }
    }
  } else { // If the alphabet is shorter than the pangram iterate over the alphabet instead
    for (let i = 0; i < alphabet.length; i += 1) {
      // For each character in our string, remove it from the result if present
      const character = alphabet.charAt(i);
      if (input.includes(character)) {
        result = result.replace(character, '');
      }
    }
  }
  return result;
});

export default getMissingLetters();
