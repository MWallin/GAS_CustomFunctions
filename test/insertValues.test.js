"use strict";

const expect = require("chai").expect;

const Fa2insertValues = require("../srcFunctions/Fa2insertValues");

describe("Custom function: Fa2insertValues", () => {
    it("should be a function", () => {
        expect(Fa2insertValues).to.be.a("function");
    });
});
