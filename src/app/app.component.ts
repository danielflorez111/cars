import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Car } from './models/classes/car';
import { ICar } from './models/interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService, private _car: Car) {
    translate.setDefaultLang('en');

    this._car.getCars().subscribe((cars: ICar[]) => {
      console.log(cars);
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
