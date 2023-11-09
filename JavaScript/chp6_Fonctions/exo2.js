function calculatrice (a,b,operation)
{
   
    switch (operation) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          throw new Error("Opération invalide");
      }

}
console.log(calculatrice(1, 2, "+")); // 3





