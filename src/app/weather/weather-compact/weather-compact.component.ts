import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/weather-data.model';

@Component({
  selector: 'app-weather-compact',
  templateUrl: './weather-compact.component.html',
  styleUrls: ['./weather-compact.component.scss']
})
export class WeatherCompactComponent {
  @Input()
  data: WeatherData;
}
