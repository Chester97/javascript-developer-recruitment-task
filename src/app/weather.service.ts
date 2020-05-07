import { Injectable } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { WeatherData } from './weather-data.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_KEY = '7d1aeffb4fd499381248a42a9b919d5d';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    if (city.trim().length === 0) {
      return empty();
    }
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`
    ).pipe(catchError(_err => of(null)));
  }

  convertKelvinToCelsiusDegrees(value: number): string {
    return (value - 273.15).toFixed(0);
  }
}
