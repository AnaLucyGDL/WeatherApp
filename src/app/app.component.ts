import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './shared/interfaces/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather$!:Observable<WeatherData>;

  public onSearch(search:string):void{
    console.log(search);
  }
}
