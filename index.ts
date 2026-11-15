import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import CitiesReporter from "@reporters/CitiesReporter";
import CitiesReporterFactory from "@reporters/CitiesReporterFactory";
import CitiesDataLoader from "@src/CitiesDataLoader";

function readCLIArgs(): { format: string; source: string } {
  const { format, source } = yargs(hideBin(process.argv))
    .option("format", {
      type: "string",
      demandOption: true,
      description: "Report format",
    })
    .option("source", {
      type: "string",
      description: "Path to the data source file to load cities from",
      default: "./data/cidades-2.json",
    })
    .help()
    .parseSync();

  return { format, source };
}

function main() {
  const { format, source } = readCLIArgs();

  const cities = CitiesDataLoader.load(source);
  const reporter: CitiesReporter = CitiesReporterFactory.create(format);

  console.log(reporter.generateReport(cities));
}

main();