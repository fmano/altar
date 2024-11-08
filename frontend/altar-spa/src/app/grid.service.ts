import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridDto } from './grid/models/grid-dto.model';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private readonly API_URL = 'http://localhost:3000/grid'; // TODO move this

  constructor(private http: HttpClient) {}

  getGrid(): Observable<GridDto> {
    return this.http.get<GridDto>(this.API_URL);
  }
}
