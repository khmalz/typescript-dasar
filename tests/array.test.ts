describe("Array", () => {
   it("should same with javascript", () => {
      const names: string[] = ["Khairul", "Rakhmat", "Oso"];
      const numbers: Array<number> = [1, 2, 3, 4, 5];

      console.info(names);
      console.info(numbers);
   });

   it("should support readonly array", () => {
      const hobbies: ReadonlyArray<string> = ["Berenang", "Coding"];
      console.info(hobbies);
      console.info(hobbies[0]);

      // hobbies[1] = "Game"; // error
   });

   it("should support tuple", () => {
      const person: readonly [string, string, number] = ["Khairul", "Akmal", 15];
      console.info(person);

      // person[1] = "Akz"; // error
   });
});
