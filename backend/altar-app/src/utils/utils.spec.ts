import { getRandomAlphabetCharacter, getGrid } from './utils';

describe('utils', () => {
  describe('getRandomAlphabetCharacter', () => {
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

  describe('getGrid', () => {
    it('should return a grid with correct dimensions', () => {
      const rows = 10;
      const columns = 10;
      const grid = getGrid(rows, columns);
      expect(grid.length).toBe(rows);
      expect(grid[0].length).toBe(columns);
    });
  });
});
