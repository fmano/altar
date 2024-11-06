import { Test, TestingModule } from '@nestjs/testing';
import { GridService } from './grid.service';
import { GridDto } from './models/grid.model';

describe('GridService', () => {
  let service: GridService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GridService],
    }).compile();

    service = module.get<GridService>(GridService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a GridDto', () => {
    const grid = service.getGrid();
    expect(typeof grid).toEqual(GridDto);
  });

  it('should return a grid with correct dimensions', () => {
    const grid = service.getGrid();
    expect(grid.grid.length).toBe(GridService.GRID_ROWS);
    expect(grid.grid[0].length).toBe(GridService.GRID_COLUMNS);
  });
});
