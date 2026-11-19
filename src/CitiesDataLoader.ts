import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { parse } from "csv-parse/sync";
import type { City } from "@reporters/CitiesReporter";

export default class CitiesDataLoader {
  static load(source: string): City[] {
    const file_data: string = readFileSync(source, "utf8");

    switch (basename(source)) {
      case "cidades-1.json": {
        type State = { cities: string[] };
        const data: { estados: State[] } = JSON.parse(file_data);
        return data.estados.flatMap(({ cities }) => 
          cities.map((name) => ({ name: name }))
        );
      }

      case "cidades-2.json": {
        const registers: { Nome: string }[] = JSON.parse(file_data);
        return registers.map(({ Nome }) => ({ name: Nome }));
      }

      case "cidades.csv": {
        const registers: { NOME: string }[] = parse(file_data, {
          columns: true,
        });
        return registers.map(({ NOME }) => ({ name: NOME }));
      }

      default:
        throw new Error("[ERRO] Unknown data source " + source);
    }
  }
}