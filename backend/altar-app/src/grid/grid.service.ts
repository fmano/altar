import { Injectable } from '@nestjs/common';
import { GridDto } from './models/grid.model';
import { getRandomAlphabetCharacter, getGrid } from '../utils/utils';

@Injectable()
export class GridService {
  public static readonly GRID_ROWS = 10;
  public static readonly GRID_COLUMNS = 10;

  private grid: GridDto;
  private lastGeneratedOn: Date;

  getGrid(): GridDto {
    const grid: GridDto = {
      grid: getGrid(GridService.GRID_ROWS, GridService.GRID_COLUMNS),
    };

    return grid;
  }
}
