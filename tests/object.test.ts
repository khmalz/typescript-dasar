describe("Object", () => {
   it("should support in typescript", () => {
      const person: { id: string; name: string } = {
         id: "1",
         name: "Akmal",
      };

      console.info(person);

      person.id = "2";
      person.name = "fayz";

      console.info(person);
   });
});
