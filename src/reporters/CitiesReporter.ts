export type City = { name: string };

export default abstract class CitiesReporter {
  title: string;

  constructor() {
    this.title = 'Relatórios de Nomes de Cidades';
  }

  abstract generateReport(cities: City[]): string;
}
