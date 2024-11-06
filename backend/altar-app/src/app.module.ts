import { Module } from '@nestjs/common';
import { GridController } from './grid/grid.controller';
import { GridService } from './grid/grid.service';

@Module({
  imports: [],
  controllers: [GridController],
  providers: [GridService],
})
export class AppModule {}
