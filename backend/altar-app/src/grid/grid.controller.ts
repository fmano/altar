import { Controller, Get, Query } from '@nestjs/common';
import { GridService } from './grid.service';
import { GridDto } from './models/grid-dto.model';

@Controller('grid')
export class GridController {
  constructor(private readonly gridService: GridService) {}

  @Get()
  getGridAndCode(@Query('bias') bias?: string): GridDto {
    return this.gridService.getGridAndCode(bias);
  }
}
