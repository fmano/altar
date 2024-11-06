import { Injectable } from '@nestjs/common';
import { GridDto } from './models/grid.model';
import { getCode, getGrid } from '../utils/utils';

@Injectable()
export class GridService {
  public static readonly GRID_ROWS = 10;
  public static readonly GRID_COLUMNS = 10;

  getGrid(): GridDto {
    const grid = getGrid(GridService.GRID_ROWS, GridService.GRID_COLUMNS);
    const code = getCode(grid, new Date());

    const gridDto: GridDto = {
      grid,
      code,
    };

    return gridDto;
  }
}
