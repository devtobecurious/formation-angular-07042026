import { Component } from '@angular/core';
import { HeaderWeather } from '../../../../shared/ui/weather/components/header-weather/header-weather';

@Component({
  selector: 'saw-header',
  imports: [HeaderWeather],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
