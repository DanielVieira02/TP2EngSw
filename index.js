import CidadesHTMLReport from './src/CidadesHTMLReporter.js';
import CidadesJSONReport from './src/CidadesJSONReporter.js';
import CidadesTXTReport from './src/CidadesTXTReporter.js';

const [cmd, filename, format] = process.argv;

let reporter;

if (format === 'html') {
  reporter = new CidadesHTMLReport();
}
else if (format === 'txt') {
  reporter = new CidadesTXTReport();
}
else if (format === 'json') {
  reporter = new CidadesJSONReport();
}

reporter.ler('./data/cidades-2.json');
reporter.parse();
let report = reporter.reportar();
console.log(report);