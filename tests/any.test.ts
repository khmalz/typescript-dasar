describe("Any", () => {
   it("should support in typescript", () => {
      const person: any = {
         id: 1,
         name: "Akmal",
         age: 17,
      };

      person.age = 18;
      person.country = "Indonesia";

      console.info(person);
   });
});
