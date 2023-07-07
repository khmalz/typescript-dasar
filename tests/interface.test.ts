import { Seller } from "../src/seller";

describe("Interface", () => {
   it("should support in typescript", () => {
      const seller: Seller = {
         id: 1,
         name: "Toko Cyan",
         nib: "19217212",
         npwp: "287615312",
      };

      seller.name = "Toko Blue";
      // seller.nib = "19217212"; // error

      console.info(seller);
   });

   it("should support function interface", () => {
      interface AddFunction {
         (value1: number, value2: number): number;
      }

      const add: AddFunction = (value1: number, value2: number): number => {
         return value1 + value2;
      };

      expect(add(1, 2)).toBe(3);
   });
});
