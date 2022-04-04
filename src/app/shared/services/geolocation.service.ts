import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GeolocationService {
  public getCurrentPosition():Promise<any> {
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })
  }
}
