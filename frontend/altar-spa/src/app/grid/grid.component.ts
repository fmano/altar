import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent implements OnInit {
  // temp
  GRID_ROWS: number = 10;
  GRID_COLUMNS: number = 10;
  grid: string[][] = [];
  code: number = -1;

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.createGrid();
  }

  createGrid(): void {
    this.grid = Array.from({ length: this.GRID_ROWS }, () =>
      Array.from({ length: this.GRID_COLUMNS }, () => '')
    );
  }

  updateGrid(): void {
    this.gridService.getGrid().subscribe({
      next: (data) => {
        this.grid = data.grid;
        this.code = data.code;
      },
      error: (err) => {
        console.error('Error fetching grid');
      },
    });
  }

  startGridGeneration(): void {
    console.log('ran once');
    setInterval(() => {
      console.log('keepsRunning');
      this.updateGrid();
    }, 1000);
  }
}
