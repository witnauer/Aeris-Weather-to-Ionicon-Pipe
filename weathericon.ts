import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weathericon',
})
export class WeathericonPipe implements PipeTransform {

  transform(value: string, args: any[]) {
    let newIcon: string = 'sunny';
    let forecastCodes: Array<string> = ["::CL", "::FW", "::SC", "::BK", "::OV"];
    let ioniconNames: Array<string> = ["sunny", "partly-sunny", "partly-sunny", "cloudy", "cloudy"];
    let iconIndex: number = forecastCodes.indexOf(value);
    if (iconIndex != -1) {
      newIcon = ioniconNames[iconIndex];
    }
    return newIcon;
  }
}
