import { parseArgs } from "node:util";

import CidadesHTMLReport from "./src/CidadesHTMLReporter.ts";
import CidadesTXTReport from "./src/CidadesTXTReporter.ts";
import CidadesJSONReport from "./src/CidadesJSONReporter.ts";

const { values } = parseArgs({
  options: {
    format: { type: "string" },
    source: { type: "string" },
  },
});

let reporter, report;

switch (values.format) {
  case "html":
    reporter = new CidadesHTMLReport();
    break;
  case "txt":
    reporter = new CidadesTXTReport();
    break;
  case "json":
    reporter = new CidadesJSONReport();
    break;
  default:
    throw new Error("[ERRO] Formato indisponível.");
}

reporter.ler("./data/cidades-2.json");
reporter.parse();
report = reporter.reportar();
console.log(report);