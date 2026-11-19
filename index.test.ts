import { describe, test, expect } from "vitest";
import { CitiesReporterFactory, HTMLCitiesReporter, JSONCitiesReporter, TXTCitiesReporter } from "@reporters/index";

describe("class CitiesReporterFactory", () => {
    test("Caso 1: Deve lançar exceção se o tipo é desconhecido ou inválido", () => {
        expect(() => CitiesReporterFactory.create("inválido")).toThrow()
    })

    test("Caso 2: O formato html deve instanciar objeto do tipo HTMLCitiesReporter", () => {
        expect(CitiesReporterFactory.create("html")).toBeInstanceOf(HTMLCitiesReporter)
    })

    test("Caso 3: O formato txt deve instanciar objeto do tipo TXTCitiesReporter", () => {
        expect(CitiesReporterFactory.create("txt")).toBeInstanceOf(TXTCitiesReporter)
    })

    test("Caso 4: O formato json deve instanciar objeto do tipo JSONCitiesReporter", () => {
        expect(CitiesReporterFactory.create("json")).toBeInstanceOf(JSONCitiesReporter)
    })
})
