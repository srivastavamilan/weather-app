import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-temperature-widgets',
  templateUrl: './temperature-widgets.component.html',
  styleUrls: ['./temperature-widgets.component.css'],
})
export class TemperatureWidgetsComponent implements OnInit {
  @Input() cityName;
  weatherData: Weather;
  value: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getWeatherData(this.cityName)
      .subscribe((weatherData: Weather) => {
        this.weatherData = weatherData;
      });
  }
}
