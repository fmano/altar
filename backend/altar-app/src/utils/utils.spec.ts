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
    const rows = 10;
    const columns = 10;

    it('should return a grid with correct dimensions', () => {
      const testGrid = getGrid(rows, columns);
      expect(testGrid.length).toBe(rows);
      expect(testGrid[0].length).toBe(columns);
    });

    it('should have an alphabet character on every position', () => {
      const testGrid = getGrid(rows, columns);

      for (let i = 0; i < testGrid.length; i++) {
        for (let j = 0; j < testGrid[0].length; j++) {
          expect(testGrid[i][j]).toMatch(/^[a-z]/); // match with a single char inside a-z
        }
      }
    });
  });
});
