import CidadesBaseReport from "./CidadesBaseReporter.ts";

class CidadesJSONReport extends CidadesBaseReport {
    reportar() {
        let result = [];

        for (let i = 0; i < this.cidades.length; i++) {
            result.push({
                "Nome": this.cidades[i]['Nome']
            })
        }

        return JSON.stringify(result, null, 2);
    }
}

export default CidadesJSONReport;