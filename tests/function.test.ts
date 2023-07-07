describe("Function", () => {
   it("should support in typescript", () => {
      const sayHello = (name: string): string => {
         return `Hello ${name}`;
      };

      expect(sayHello("Akmal")).toBe("Hello Akmal");

      const printHello = (name: string): void => {
         console.info(`Hello ${name}`);
      };

      printHello("Akmal");
   });
});
