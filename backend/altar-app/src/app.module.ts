import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GridController } from './grid/grid.controller';

@Module({
  imports: [],
  controllers: [AppController, GridController],
  providers: [AppService],
})
export class AppModule {}
