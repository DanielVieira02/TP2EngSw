import * as fs from 'node:fs';

abstract class CidadesBaseReport {
  title: string;
  cidades: any;

  constructor() {
    this.title = 'Relatórios de Nomes de Cidades'
  }

  ler(caminho: string): void {
    this.cidades = fs.readFileSync(caminho);
  }

  parse(): void {
    this.cidades = JSON.parse(this.cidades);
  }

  abstract reportar(): void;
}

export default CidadesBaseReport;
