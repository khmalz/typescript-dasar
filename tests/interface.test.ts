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
});
