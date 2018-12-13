import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CarService } from '../services/car.service';

@Injectable()
export class Car {

    constructor(private _carService: CarService) { }

    getCars(): Observable<Object> {
        return this._carService.getCars();
    }

}
