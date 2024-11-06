const ALPHABET_SIZE = 26;
const INITIAL_CHAR_CODE = 97; // code for lowercase 'a'

export function getRandomAlphabetCharacter(): string {
  const randomChar =
    Math.floor(Math.random() * ALPHABET_SIZE) + INITIAL_CHAR_CODE;
  return String.fromCharCode(randomChar);
}
