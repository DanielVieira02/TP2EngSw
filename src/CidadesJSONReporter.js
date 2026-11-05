import CidadesBaseReport from "./CidadesBaseReporter.js";

export default class CidadesJSONReport extends CidadesBaseReport {
    reportar() {
        let result = {
            [this.title]: []
        }

        for (let i = 0; i < this.cidades.length; i++) {
            result[this.title].push(this.cidades[i]['Nome'])
        }

        return JSON.stringify(result, null, 2);
    }
}