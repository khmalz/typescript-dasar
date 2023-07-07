import { sayHello } from "../src/say-hello";
describe("Optional Parameter", () => {
   it("should support null and undefined", () => {
      const sayHello = (name?: string | null) => {
         name ? console.info(`Hello ${name}`) : console.info("Hello");
      };

      sayHello("Akmal");

      const name: string | undefined = undefined;
      sayHello(name);
      sayHello(null);
   });
});
