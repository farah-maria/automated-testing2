const addition = require("../script.js");

describe("Addition function", () => {
    test("should return 3 for 1 + 2", () => {
        expect(addition(1, 2)).toBe(3);
    });
});