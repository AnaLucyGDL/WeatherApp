import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coord, WeatherData } from '@app/shared/interfaces/weather.interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL = environment.openWeather.url;
  constructor(private readonly http: HttpClient) {}

  //Search by city
  public getWeatherByName(city: string):Observable<WeatherData>{
    const params = new HttpParams() // Params we need to send to the API
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.openWeather.key);
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params});
  };

  //Search by coords
  public getWeatherByCoords(coords: Coord):Observable<WeatherData> {
  const params = new HttpParams() // Params we need to send to the API
      .set('lat', coords.lat)
      .set('lon', coords.lon)
      .set('units', 'metric')
      .set('appid', environment.openWeather.key);
  return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params});
  };
}
