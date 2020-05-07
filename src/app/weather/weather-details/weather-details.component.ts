import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherData } from 'src/app/weather-data.model';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input()
  data: WeatherData;

  favorite: boolean;

  constructor(private favoritesService: FavoritesService) {
  }

  private updateFavorite() {
    this.favorite = this.favoritesService.isFavorite(this.data?.name);
  }

  ngOnInit() {
    this.updateFavorite();
  }
  
  addToFavs() {
    this.favoritesService.add(this.data.name);
    this.updateFavorite();
  }

  removeFromFavs() {
    this.favoritesService.remove(this.data.name);
    this.updateFavorite();
  }
}
