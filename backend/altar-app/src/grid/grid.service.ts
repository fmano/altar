import { Injectable } from '@nestjs/common';
import { GridDto } from './models/grid.model';
import { getCode, createGrid } from '../utils/utils';

@Injectable()
export class GridService {
  public static readonly GRID_ROWS = 10;
  public static readonly GRID_COLUMNS = 10;

  getGridAndCode(bias?: string): GridDto {
    const grid = createGrid(
      GridService.GRID_ROWS,
      GridService.GRID_COLUMNS,
      bias,
    );
    const code = getCode(grid, new Date());

    const gridDto: GridDto = {
      grid,
      code,
    };

    return gridDto;
  }
}
