import CitiesReporter from '@reporters/CitiesReporter';
import type { City } from '@reporters/CitiesReporter';

export default class TXTCitiesReporter extends CitiesReporter {

  generateReport(cities: City[]): string {
    let result: string = `${this.title}
=============================\n`;

    for (const city of cities) {
      result += '* ' + city.name + '\n';
    }

    return result;
  }

}