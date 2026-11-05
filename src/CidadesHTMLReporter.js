import CidadesBaseReport from './CidadesBaseReporter.js';

export default class CidadesHTMLReport extends CidadesBaseReport {

  reportar() {
    let result = `
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

    for (let i = 0; i < this.cidades.length; i++) {
      result += '     <li>' + this.cidades[i]['Nome'] + '</li>\n';
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}
