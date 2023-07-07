import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
   it("should support in typesript", () => {
      const customer: Customer = {
         id: 1,
         name: "Khairul",
         type: CustomerType.GOLD,
      };

      console.info(customer);
   });
});
