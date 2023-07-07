describe("loop", () => {
   it("should support for loop", () => {
      const names: string[] = ["Khairul", "Akmal"];

      for (let i = 0; i < names.length; i++) {
         console.info(names[i]);
      }

      for (const name of names) {
         console.info(name);
      }

      for (const index in names) {
         console.info(names[index]);
      }
   });

   it("should support while loop", () => {
      let counter = 0;
      while (counter < 5) {
         console.info(counter);
         counter++;
      }
   });

   it("should support do while loop", () => {
      let counter = 0;
      do {
         console.info(counter);
         counter++;
      } while (counter < 5);
   });

   it("should support break and continue", () => {
      let counter: number = 0;
      do {
         counter++;
         if (counter == 10) break;
         if (counter % 2 == 0) continue;

         console.info(counter);
      } while (true);
   });
});
