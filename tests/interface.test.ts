import { Employee, Manager } from "../src/employee";
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

   it("should support indexable interface", () => {
      interface stringArray {
         [index: number]: string;
      }

      const names: stringArray = ["Khairul", "Akmal"];
      console.info(names);
      console.info(names[1]);
   });

   it("should support indexable interface for non number index", () => {
      interface stringDictionary {
         [key: string]: string;
      }

      const dictionary: stringDictionary = {
         name: "Khairul",
         address: "Indonesia",
      };

      expect(dictionary["name"]).toBe("Khairul");
      expect(dictionary["address"]).toBe("Indonesia");
   });

   it("should support extends interface", () => {
      const employee: Employee = {
         id: "!",
         name: "Khairul",
         division: "IT",
      };

      console.info(employee);

      const manager: Manager = {
         id: "2",
         name: "Akmal",
         division: "IT",
         numberOfEmployees: 10,
      };

      console.info(manager);
   });

   it("should support funtion in interface", () => {
      interface Person {
         name: string;
         sayHello(name: string): string;
      }

      const person: Person = {
         name: "Akmal",
         sayHello: function (name: string): string {
            return `Hallo ${name}, my name is ${this.name}`;
         },
      };

      console.info(person.sayHello("Budi"));
   });
});
