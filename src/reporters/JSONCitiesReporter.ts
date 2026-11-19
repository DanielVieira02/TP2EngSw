import CitiesReporter from "@reporters/CitiesReporter";
import type { City } from "@reporters/CitiesReporter";

export default class JSONCitiesReporter extends CitiesReporter {
    generateReport(cities: City[]): string {
        const names: string[] = [];

        for (const city of cities) {
            names.push(city.name);
        }

        const result: Object = {
            [this.title]: names
        };
        return JSON.stringify(result, null, 2);
    }
}
