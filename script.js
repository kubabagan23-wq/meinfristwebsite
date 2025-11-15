console.log(`Hello there! This is part 1 of java script coding`);
console.log(`TAKE YOUR CHRISMAS TREE DOWN OR ELSE THE GRINCH WILL HAVE TO DO IT HIMSELF!!!`);

let firstName = "Bro";
let age = 21;
let student = true;
age = age + 1;
console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

let x = 3.14;
x = Math.round(x);
console.log(x);

let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}