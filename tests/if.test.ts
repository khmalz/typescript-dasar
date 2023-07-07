describe("If Statement", () => {
   it("should support in typescript", () => {
      const examValue = 90;

      if (examValue > 80) {
         console.info("Good");
      } else if (examValue > 60) {
         console.info("Not Bad");
      } else {
         console.info("Try again");
      }
   });

   it("should support ternary operator", () => {
      const value = 80;
      const say = value >= 75 ? "Congratulation" : "Try Again";
      console.info(say);
   });

   it("should support switch statement", () => {
      const sayHello = (name: string): string => {
         switch (name) {
            case "Jaya":
               return "Hi Jaya";
            case "Sayza":
               return "Hi Sayza";
            default:
               return "Hi";
         }
      };

      console.info(sayHello("Jaya"));
      console.info(sayHello("Sayza"));
      console.info(sayHello("Budi"));
   });
});
