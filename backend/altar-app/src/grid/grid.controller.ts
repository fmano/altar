import { Controller, Get } from '@nestjs/common';
import { GridService } from './grid.service';
import { GridDto } from './models/grid.model';

@Controller('grid')
export class GridController {
  constructor(private readonly gridService: GridService) {}

  @Get()
  getGrid(): GridDto {
    return this.gridService.getGrid();
  }
}
