import CitiesReporter from '@reporters/CitiesReporter';
import type { City } from '@reporters/CitiesReporter';

export default class HTMLCitiesReporter extends CitiesReporter {
  generateReport(cities: City[]): string {
    let result: string = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>${this.title}</title>
    </head>
    <body>
      <h1>${this.title}</h1>
      <ul>
  `;

    for (const city of cities) {
      result += `     <li>${city.name}</li>\n`;
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}
