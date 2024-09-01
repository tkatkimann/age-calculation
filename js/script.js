"use strict";


//Dette betyder at brugeren kan skrive i kommentarfeltet.
let birthYear = prompt("Venligst indtast dit fødselsår her:");

//parseInt gør at den konventere en string til radix dsv. fra tekst til et heltal.
//Når en bruger indtaster deres fødselsår via en prompt, bliver det automatisk behandlet som en string i JavaScript. En string er simpelthen en sekvens af tegn, der repræsenterer tekst. Dette sker, fordi input fra en prompt i JavaScript altid bliver behandlet som tekst, uanset om brugeren indtaster tal eller bogstaver.
birthYear = parseInt(birthYear);

// Når man bruger Date()betyder det at man får det nuværende år 2024:
let currentYear = new Date().getFullYear();

// Her beregnes alderen. fx 2024 - 2003:
let age = currentYear - birthYear;

// Her vises resultatet mellem ord:
console.log("Du er " + age + " år gammel.");

// Ved at bruge document.write vises resultatet på websiden:
document.write("Du er " + age + " år gammel.");

