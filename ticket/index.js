// function moviePass() {
//    let age = prompt("Insert your age: ").trim();

//    if (age === "" || isNaN(age)) {
//     alert("I am here"); // return moviePass();
//    }

//    age = Number(age);

//    if (age <= 12) {
//     alert("Your fare is $10 only");
//    } else if (age >= 13 && age <= 17) {
//     alert("Your fare is $15");
//    } else if (age >= 18) {
//     alert("Your fare is $20");
//    }
// }

function getTicketPrice(age) {
   if (age <= 12) return "$10";
   if (age >= 13 && age <= 17) return "$15";
   return "$20";
}

let userAge = prompt("Enter your age:");
alert("Your ticket price is: " + getTicketPrice(parseInt(userAge)));