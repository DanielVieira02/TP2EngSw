import CidadesBaseReport from './CidadesBaseReporter.js';

export default class CidadesTXTReporter extends CidadesBaseReport {

  reportar() {
    let result = `${this.title}
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }

}

