import { Pipe, PipeTransform } from '@angular/core';
import { Selfie } from '../models/selfie';

@Pipe({
  name: 'selfieToString',
  pure: true
})
export class SelfieToStringPipe implements PipeTransform {
  transform(value: Selfie, ...args: unknown[]): string {
    return `${value.title} - ${value.description} (${value.date.toDateString()})`;
  }
}
