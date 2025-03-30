function moviePass() {
   let age = prompt("Insert your age: ").trim();

   if (age === "" || isNaN(age)) {
    alert("I am here"); // return moviePass();
   }

   age = Number(age);

   if (age <= 12) {
    alert("Your fare is $10 only");
   } else if (age >= 13 && age <= 17) {
    alert("Your fare is $15");
   } else if (age >= 18) {
    alert("Your fare is $15");
   }
}