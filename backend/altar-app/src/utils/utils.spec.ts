import { getRandomAlphabetCharacter, createGrid, getCode } from './utils';

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

  describe('createGrid', () => {
    const rows = 10;
    const columns = 10;

    it('should return a grid with correct dimensions', () => {
      const testGrid = createGrid(rows, columns);
      expect(testGrid.length).toBe(rows);
      expect(testGrid[0].length).toBe(columns);
    });

    it('should have an alphabet character on every position', () => {
      const testGrid = createGrid(rows, columns);

      for (let i = 0; i < testGrid.length; i++) {
        for (let j = 0; j < testGrid[0].length; j++) {
          expect(testGrid[i][j]).toMatch(/^[a-z]/); // match with a single char inside a-z
        }
      }
    });

    it('should have more than 20% of a specific character when invoked with bias', () => {
      const testGrid = createGrid(rows, columns, 'x');
      const totalCharacters = rows * columns;
      const biasCharacterCount = testGrid
        .flat()
        .filter((element) => element === 'x').length;

      const biasPercentage = (biasCharacterCount * 100) / totalCharacters;
      console.log(
        `total ${totalCharacters} biasCount ${biasCharacterCount} biasPercent ${biasPercentage}`,
      );
      expect(biasPercentage).toBeGreaterThanOrEqual(20);
    });
  });

  describe('getCode', () => {
    const grid = [
      ['a', 'a', 'b'],
      ['c', 'd', 'd'],
      ['d', 'e', 'f'],
    ];

    it('should return a number', () => {
      const date = new Date();
      jest.spyOn(date, 'getSeconds').mockReturnValueOnce(1);

      const code = getCode(grid, date);

      expect(typeof code).toBe('number');
    });

    it('should return valid codes', () => {
      const date = new Date();
      jest
        .spyOn(date, 'getSeconds')
        .mockReturnValueOnce(1) // should pick positions [0, 1] and [1, 0]
        .mockReturnValueOnce(21); // should pick positions [2, 1] and [1, 2]

      // first call should pick 'a' and 'c' with 2 and 1 ocurrences respectively
      const code1 = getCode(grid, date);
      // second call should pick 'e' and 'd' with 1 and 3 ocurrences respectively
      const code2 = getCode(grid, date);

      expect(code1).toBe(21);
      expect(code2).toBe(13);
    });
  });
});
