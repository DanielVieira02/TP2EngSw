import CitiesReporter from "@reporters/CitiesReporter";
import HTMLCitiesReporter from "@src/reporters/HTMLCitiesReporter";
import TXTCitiesReporter from "@reporters/TXTCitiesReporter";
import JSONCitiesReporter from "@reporters/JSONCitiesReporter";

export default class CitiesReporterFactory {
  static create(format: string): CitiesReporter {
    switch (format) {
      case "html":
        return new HTMLCitiesReporter();
      case "txt":
        return new TXTCitiesReporter();
      case "json":
        return new JSONCitiesReporter();
      default:
        throw new Error("[ERROR] Unknown format: " + format);
    }
  }
}
