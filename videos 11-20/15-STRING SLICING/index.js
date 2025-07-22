// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)

// ------------ EXAMPLE 1 ------------
const fullName = "AhmadReza Code";

let firstName = fullName.slice(0, 9);
let lastName = fullName.slice(10, 14);

console.log(firstName);
console.log(lastName);

// ------------ EXAMPLE 2 ------------

const email = "AhmadReza16@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

