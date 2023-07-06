import { sayHello } from "../src/say-hello";

describe("Say Hello", (): void => {
   it("should return hello eko", (): void => {
      expect(sayHello("akmal")).toBe("Hello akmal");
   });
});
