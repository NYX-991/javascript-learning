// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Safa",
    "full name": "Safa Khan",
    [mySym]: "mykey1",
    age: 20,
    email: "safa@example.com"
}

console.log(JsUser.email);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log( JsUser[mySym]);

JsUser.email = "newemail@example.com";
console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("Hello, I am " + this.name);
}
JsUser.greeting();

Object.freeze(JsUser);
JsUser.email = "anotheremail@example.com";
console.log(JsUser.email);