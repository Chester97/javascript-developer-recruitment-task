import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherData } from '../weather-data.model';
import { WeatherService } from '../weather.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  @Input()
  city: Observable<string>;

  @Input()
  details: boolean;

  loading: boolean = false;
  error: boolean = false;

  public data?: WeatherData = null;

  private dataSub?: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.dataSub = this.city.pipe(
      tap(() => {
        this.data = null;
        this.error = false;
        this.loading = true;
      }),
      switchMap(city => this.weatherService.getWeather(city)),
    )
      .subscribe(data => {
        this.data = data;
        this.error = data == null;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
