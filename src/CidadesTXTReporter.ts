import CidadesBaseReport from './CidadesBaseReporter.ts';

class CidadesTXTReporter extends CidadesBaseReport {

  reportar() {
    let result = `${this.title}
=============================\n`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }

}

export default CidadesTXTReporter;