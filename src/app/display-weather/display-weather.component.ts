import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-display-weather",
  templateUrl: "./display-weather.component.html",
  styleUrls: ["./display-weather.component.css"]
})
export class DisplayWeatherComponent implements OnInit {
  weather: any[];
  constructor(private weatherService: WeatherService) {}

  searchGenre() {
    this.weatherService.getWeather().subscribe(data => {
      this.genres = data.genres;
    });
  }

  ngOnInit() {
    this.getWeather();
  }
}
