import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'WeatherPwa';
    search!: string;
    data!: any;
    isNameCorrect: boolean = false;
    constructor(private api: WeatherService) { }

    searchMethod(event: any) {
        if (event.key === 'Enter') {
            this.api.fetchWeather(this.search).subscribe(res => {
                this.isNameCorrect = true;
                this.data = res;
            }, err => {
                this.isNameCorrect = false;
            })
        }
    }

    roundedTemp(temp: number) {
        return Math.round(temp);
    }
}
