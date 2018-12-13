import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICar } from '../interfaces/car.interface';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Object> {
    return this.http.get('./assets/data/cars.json');
  }

}
