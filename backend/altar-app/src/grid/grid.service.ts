import { Injectable } from '@nestjs/common';
import { GridDto } from './models/grid.model';

@Injectable()
export class GridService {
  getGrid(): GridDto {
    const testGrid = {
      grid: [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
        ['u', 'v', 'w', 'x', 'y', 'z', 'a1', 'b1', 'c1', 'd1'],
      ],
    };
    return testGrid;
  }
}
