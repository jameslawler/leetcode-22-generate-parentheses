const { generateParenthesis } = require("./");

describe("Generate Parenthesis", () => {
  describe("when n = 1", () => {
    it("should generate parenthesis", () => {
      const result = generateParenthesis(1);
      expect(result).toStrictEqual(["()"]);
    });
  });
  describe("when n = 2", () => {
    it("should generate parenthesis", () => {
      const result = generateParenthesis(2);
      console.log(result);
      expect(result).toEqual(["(())", "()()"]);
    });
  });
  describe("when n = 3", () => {
    it("should generate parenthesis", () => {
      const result = generateParenthesis(3);
      expect(result).toStrictEqual([
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()",
      ]);
    });
  });
});
