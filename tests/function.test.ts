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

   it("should support default value", () => {
      const sayHello = (name: string = "Guest"): string => {
         return `Hello ${name}`;
      };

      expect(sayHello("Akmal")).toBe("Hello Akmal");
      expect(sayHello()).toBe("Hello Guest");
   });

   it("should support rest parameter", () => {
      const sum = (...values: number[]): number => {
         return values.reduce((acc, sum) => acc + sum, 0);
      };

      expect(sum(1, 2, 3, 4, 5)).toBe(15);
   });

   it("should support optional parameter", () => {
      const sayHello = (firstName: string, lastName?: string): string => {
         return lastName ? `Hello ${firstName} ${lastName}` : `Hello ${firstName}`;
      };

      expect(sayHello("Khairul")).toBe("Hello Khairul");
      expect(sayHello("Khairul", "Akmal")).toBe("Hello Khairul Akmal");
   });
});
