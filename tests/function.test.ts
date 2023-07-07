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

   it("should support function overloading", () => {
      function callMe(value: number): number;
      function callMe(value: string): string;
      function callMe(value: any): any {
         if (typeof value === "string") {
            return value.toUpperCase();
         } else if (typeof value === "number") {
            return value * 10;
         }
      }

      expect(callMe(10)).toBe(100);
      expect(callMe("Akmal")).toBe("AKMAL");
   });

   it("should function as parameter", () => {
      function sayHello(name: string, filter: (name: string) => string): string {
         return `Hello ${filter(name)}`;
      }

      const toUpper = (name: string): string => {
         return name.toUpperCase();
      };

      expect(sayHello("Akmal", toUpper)).toBe("Hello AKMAL");

      // Annonymous function
      expect(
         sayHello("Akmal", function (name: string): string {
            return name.toUpperCase();
         })
      ).toBe("Hello AKMAL");

      // Arrow function
      expect(sayHello("Akmal", (name: string): string => name.toUpperCase())).toBe("Hello AKMAL");
   });
});
