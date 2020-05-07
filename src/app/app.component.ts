import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherData } from './weather-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-weather';
  value: string = '';
  querySub = new Subject<string>();
  query = this.createQueryPipe();
  cityWeather: WeatherData = null;
  validateError: string = '';

  constructor() {
  }

  private createQueryPipe() {
    return this.querySub.pipe(distinctUntilChanged(), debounceTime(1000));
  }

  ngOnInit(): void {
  }

  onInputData(): void {
    const searchText = this.value;
    if (this.validateInputValue(searchText)) {
      this.querySub.next(searchText);
    } else {
      this.cityWeather = null;
    }
  }

  validateInputValue(value: string): boolean {
    if (value.length < 3 && value.length > 0) {
      this.validateError = "Value is too short";
      return false;
    }
    if (value.length === 0) {
      this.validateError = "";
      return false;
    }
    if (typeof value === "number") {
      this.validateError = "Value have to be string.";
      return false;
    }
    this.validateError = "";
    return true;
  }

}
