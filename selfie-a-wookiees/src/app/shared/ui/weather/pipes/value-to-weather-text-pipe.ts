import { Pipe, PipeTransform } from '@angular/core';
import { Weather } from '../models/weather';

@Pipe({
  name: 'valueToWeatherText',
  pure: true
})
export class ValueToWeatherTextPipe implements PipeTransform {
  transform(value: Weather, ...args: unknown[]): string {
    switch (value.value) {
      case -100:
        return 'Extreme weather conditions';
      case -1:
        return 'Poor weather conditions';
      case 0:
        return 'Neutral weather conditions';
      case 1:
        return 'Good weather conditions';
      default:
        return 'Unknown weather conditions';
    }
  }
}
