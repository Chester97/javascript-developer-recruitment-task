import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCompactComponent } from './weather/weather-compact/weather-compact.component';
import { KelvinToCelsiusPipe } from './weather/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    WeatherDetailsComponent,
    WeatherComponent,
    WeatherCompactComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
