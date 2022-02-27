import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(keyword: string): Observable<Weather> {
    return this.http.get<Weather>(
      environment.baseUrl + '/?q=' + keyword + '&appid=' + environment.apiKey
    );
  }
}
