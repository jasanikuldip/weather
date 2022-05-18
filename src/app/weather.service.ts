import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    URL = "https://api.openweathermap.org/data/2.5/weather";
    API_KEY = "f33a484cf794d08d0148764789aaba32";

    constructor(private http: HttpClient) { }

    fetchWeather(query: string) {
        return this.http.get(this.URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: this.API_KEY
            }
        });
    }
}
