import { Injectable } from '@nestjs/common';
import { GridDto } from './models/grid.model';

@Injectable()
export class GridService {
  public static readonly GRID_ROWS = 10;
  public static readonly GRID_COLUMNS = 10;

  getGrid(): GridDto {
    const testGrid: string[][] = Array.from(
      { length: GridService.GRID_ROWS },
      (_, row) =>
        Array.from(
          { length: GridService.GRID_COLUMNS },
          (_, col) => `${row}${col}`,
        ),
    );

    const grid: GridDto = {
      grid: testGrid,
    };

    return grid;
  }
}
