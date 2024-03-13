import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

import { Category } from './category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  
  getCategoryList(): Observable<Category[]> {
    return this._http.get<Category[]>('http://localhost:5263/api/Category')
  }
}
