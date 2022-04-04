import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './pages/weather/services/weather.service';
import { WeatherData } from './shared/interfaces/weather.interface';
import { GeolocationService } from './shared/services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather$!:Observable<WeatherData>;

  constructor(
    private readonly weatherSvc: WeatherService,
    private readonly getLocationSvc: GeolocationService
    ) {
      if(navigator?.geolocation) { //Verify if he navigator can access to geolocation
        this.getLocation();
      }
  }

  public onSearch(city:string):void{
    this.weather$ = this.weatherSvc.getWeatherByName(city);
  }

  private async getLocation(): Promise<void> {
    try {
      const {coords} = await this.getLocationSvc.getCurrentPosition();
      this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
    } catch (error) {
      console.error(error);
    }
  }
}
