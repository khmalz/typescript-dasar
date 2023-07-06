describe("Union Type", () => {
   it("should support in typescript", () => {
      let sample: number | string | boolean = "Akmal";
      console.info(sample);

      sample = 100;
      console.info(sample);

      // sample = [1, 2]; // error
   });

   it("should support typeof operator", () => {
      const process = (value: number | string | boolean) => {
         if (typeof value === "string") {
            return value.toUpperCase();
         } else if (typeof value === "number") {
            return value + 2;
         } else {
            return !value;
         }
      };

      expect(process("Akmal")).toBe("AKMAL");
      expect(process(100)).toBe(102);
      expect(process(true)).toBe(false);
   });
});
