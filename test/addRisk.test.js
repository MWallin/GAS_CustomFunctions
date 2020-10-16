"use strict";

const expect = require("chai").expect;

const Fa2addRisk = require("../srcFunctions/Fa2addRisk");

describe("Custom function: Fa2addRisk", () => {
    it("should be a function", () => {
        expect(Fa2addRisk).to.be.a("function");
    });

    it("should add a risk factor to a number", () => {
        const result = Fa2addRisk(10, 2);

        expect(result).to.equal(30);
    });

    it("should add a small risk factor to a number", () => {
        const result = Fa2addRisk(10, 0.25);

        expect(result).to.equal(12.5);
    });
});
