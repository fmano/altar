const ALPHABET_SIZE = 26;
const INITIAL_CHAR_CODE = 97; // code for lowercase 'a'

const BIAS_AMOUNT = 0.2; // percentage of positions to be filled with a specified character

/**
 * Generates and returns a single random character from [a-z]
 * @returns a random character from [a-z]
 */
export function getRandomAlphabetCharacter(): string {
  const randomChar =
    Math.floor(Math.random() * ALPHABET_SIZE) + INITIAL_CHAR_CODE;

  return String.fromCharCode(randomChar);
}

/**
 * Generates and returns a grid with the specified number of rows and columns
 * @param rows number of grid rows
 * @param columns number of grid columns
 * @param bias optional parameter specifying a character to occupy 20% of the grid's positions
 * @returns a grid filled with a single random character in each position
 */
export function createGrid(
  rows: number,
  columns: number,
  bias?: string,
): string[][] {
  const grid: string[][] = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => getRandomAlphabetCharacter()),
  );

  if (bias) {
    const numberOfPositionsToFill = rows * columns * BIAS_AMOUNT;
    const randomPositions = new Set<number>();

    while (randomPositions.size < numberOfPositionsToFill) {
      // pick a random position from the entire grid
      randomPositions.add(Math.floor(Math.random() * rows * columns));
    }

    // split each position from [0 - gridSize] to [0 - row][0 - column]
    const indices = Array.from(randomPositions).map((index) => {
      const biasRow = Math.floor(index / columns);
      const biasColumn = index % columns;
      return [biasRow, biasColumn];
    });

    // set the bias character on every position calculated above
    for (const index of indices) {
      grid[index[0]][index[1]] = bias;
    }
  }

  return grid;
}

/**
 * Generates and returns a two digit code following the algorithm:
 *
 * 1. get the seconds part of the specified time parameter
 * 2. use the first and second digits of the seconds as row/column indices
 *    and use those indices to retrieve the character on those positions [a,b] and [b,a]
 * 3. count the ocurrences of the obtained characters on the grid
 * 4. if the count is greater than 9, divide by the smallest integer possible so that
 *    the value is lower or equal to 9
 * 5. return the result
 *
 * @param grid the grid on which the algorithm will be applied
 * @param time the time from which to extract the seconds component
 * @returns a two digit number
 */
export function getCode(grid: string[][], time: Date): number {
  const indexDigits = time.getSeconds();
  const index1 = Math.floor(indexDigits / 10); // gets the first digit of the two digit seconds
  const index2 = indexDigits % 10; // gets the second digit of the two digit seconds

  const char1 = grid[index1][index2];
  const char2 = grid[index2][index1];

  const char1Ocurrences = countOcurrencesInGrid(grid, char1);
  const char2Ocurrences = countOcurrencesInGrid(grid, char2);

  return (
    divideUntilLessOrEqualTo(char1Ocurrences, 9) * 10 +
    divideUntilLessOrEqualTo(char2Ocurrences, 9)
  );
}

/**
 * Counts the number of ocurrences of a specific character in a grid
 * @param grid the grid on which the count will be performed
 * @param char the char to be searched
 * @returns the number of ocurrences of the specified char
 */
function countOcurrencesInGrid(grid: string[][], char: string): number {
  return grid.flat().filter((element) => element === char).length;
}

/**
 * Divides a number by integers progressively until it is smaller or equal to the limit number
 * @param numberToDivide the number to divide
 * @param limit the number to be less than or equal to
 */
function divideUntilLessOrEqualTo(numberToDivide: number, limit: number) {
  for (let i = 1; i <= numberToDivide; i++) {
    if (numberToDivide / i < limit) {
      return Math.round(numberToDivide / i);
    }
  }
}
