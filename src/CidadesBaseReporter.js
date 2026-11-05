import * as fs from 'node:fs';

export default class CidadesBaseReport {
 constructor(nome) {
    if (new.target === CidadesBaseReport) {
      throw new TypeError(
        'Classe abstrata não pode ser instanciada diretamente.'
      );
    }

    this.title = 'Relatórios de Nomes de Cidades'
  }

  ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse () {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar () {
    throw new Error("reportar() deve ser implementado por uma classe filha");
  }
}