import { getRandomAlphabetCharacter } from './utils';

describe('utils', () => {
  it('should return a single character', () => {
    const randomChar = getRandomAlphabetCharacter();
    expect(randomChar).toHaveLength(1);
  });

  it('should return a character within a-z', () => {
    const randomChar = getRandomAlphabetCharacter();
    expect(randomChar).toMatch(/^[a-z]/); // match with a single char inside a-z
  });

  it('should return different results when called multiple times', () => {
    const randomChars = new Set(); // set doesnt store duplicates

    for (let i = 0; i < 10; i++) {
      randomChars.add(getRandomAlphabetCharacter());
    }

    expect(randomChars.size).toBeGreaterThan(1);
  });
});
