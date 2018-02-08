import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weathericon',
})
export class WeathericonPipe implements PipeTransform {

  transform(value: string, args: any[]) {
    let newIcon: string = 'sunny';
    let forecastCodes: Array<string> = ["am_pcloudyr.png", "am_showers.png", "am_showshowers.png", "am_tstorm.png", "blizzard.png", "blizzardn.png", "blowingsnow.png", "blowingsnown.png", "chancetstorm.png", "chancetstormn.png", "clear.png", "clearn.png", "clearw.png", "clearwn.png", "cloudy.png", "cloudyn.png", "cloudyw.png", "cloudywn.png", "drizzle.png", "drizzlef.png", "drizzlen.png", "dust.png", "fair.png", "fairn.png", "fairw.png", "fairwn.png", "fdrizzle.png", "fdrizzlen.png", "flurries.png", "flurriesn.png", "flurriesw.png", "flurrieswn.png", "fog.png", "fogn.png", "freezingrain.png", "freezingrainn.png", "hazy.png", "hazyn.png", "mcloudy.png", "mcloudyn.png", "mcloudyr.png", "mcloudyrn.png", "mcloudyrw.png", "mcloudyrwn.png", "mcloudys.png", "mcloudysfn.png", "mcloudysfw.png", "mcloudysfwn.png", "mcloudysn.png", "mcloudysw.png", "mcloudyswn.png", "mcloudyt.png", "mcloudytn.png", "mcloudytw.png", "mcloudytwn.png", "mcloudyw.png", "mcloudywn.png", "na.png", "pcloudy.png", "pcloudyn.png", "pcloudyr.png", "pcloudyrn.png", "pcloudyrw.png", "pcloudyrwn.png", "pcloudys.png", "pcloudysf.png", "pcloudysfn.png", "pcloudysfw.png", "pcloudysfwn.png", "pcloudysn.png", "pcloudysw.png", "pcloudyswn.png", "pcloudyt.png", "pcloudytn.png", "pcloudytw.png", "pcloudytwn.png", "pcloudyw.png", "pcloudywn.png", "pm_pcloudy.png", "pm_pcloudyr.png", "pm_showers.png", "pm_snowshowers.png", "pm_tstorm.png", "rain.png", "rainandsnow.png", "rainandsnown.png", "rainn.png", "raintosnow.png", "raintosnown.png", "rainw.png", "showers.png", "showersn.png", "showersw.png", "sleet.png", "sleetn.png", "sleetsnow.png", "smoke.png", "smoken.png", "snow.png", "snown.png", "snowshowers.png", "snowshowersn.png", "snowshowersw.png", "snowshowerswn.png", "snowtorain.png", "snowtorainn.png", "snoww.png", "snowwn.png", "sunny.png", "sunnyn.png", "sunnyw.png", "sunnywn.png", "tstorm.png", "tstormn.png", "tstormsw.png", "tstormswn.png", "tstormw.png", "tstormwn.png", "wind.png", "wintrymix.png", "wintrymixn.png"];

    let ioniconNames: Array<string> = ["partly-sunny", "rainy", "snowy", "thunderstorm", "snow", "snow", "snow", "snow", "thunderstorm", "thunderstorm", "sunny", "moon", "sunny", "moon", "cloudy", "cloudy", "cloudy", "cloudy", "rainy", "rainy", "rainy", "cloudy", "sunny", "moon", "sunny", "moon", "rainy", "rainy", "snow", "snow", "snow", "snow", "cloudy", "cloudy-night", "rainy", "rainy", "sunny", "moon", "partly-sunny", "cloudy-night", "rainy", "rainy", "rainy", "rainy", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "thunderstorm", "thunderstorm", "thunderstorm", "thunderstorm", "partly-sunny", "cloudy-night", "heart", "partly-sunny", "cloudy-night", "rainy", "rainy", "rainy", "rainy", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "thunderstorm", "thunderstorm", "thunderstorm", "thunderstorm", "partly-sunny", "cloudy-night", "partly-sunny", "rainy", "rainy", "snow", "thunderstorm", "rainy", "snow", "snow", "rainy", "snow", "snow", "rainy", "rainy", "rainy", "rainy", "snow", "snow", "snow", "flame", "flame", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "snow", "sunny", "moon", "sunny", "moon", "thunderstorm", "thunderstorm", "thunderstorm", "thunderstorm", "thunderstorm", "thunderstorm", "heart", "snow", "snow"];
    let iconIndex: number = forecastCodes.indexOf(value);
    if (iconIndex != -1) {
      newIcon = ioniconNames[iconIndex];
    }
    return newIcon;
  }
}
