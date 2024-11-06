import { Module } from '@nestjs/common';
import { GridController } from './grid/grid.controller';
import { GridService } from './grid/grid.service';
import { CodeController } from './code/code.controller';
import { CodeService } from './code/code.service';

@Module({
  imports: [],
  controllers: [GridController, CodeController],
  providers: [GridService, CodeService],
})
export class AppModule {}
