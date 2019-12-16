import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "f53eef0b095fada72ed938b843a44d7f";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getLocalWeather(location: string): Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather/?", {
      params: {
        appid: API_KEY,
        q: location,
        units: "imperial"
      }
    });
  }
}
