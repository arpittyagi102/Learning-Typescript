"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Arpit Tyagi",
    age: 20,
};
console.log(user.email); // ! Property 'email' does not exist on 'user'
// * Declaring variables in Typescript
var greetings = "Hi Arpit 👋";
var myNum = 14;
myNum.toUpperCase(); // ! Property 'toUpperCase' does not exist on type 'number'
greetings = true; // ! Type 'boolean' is not assignable to type 'string'
console.log(greetings.toUppercase());
