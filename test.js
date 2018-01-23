const assert = require("assert");

function makeGreeting() {
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
console.log("success");

/*
Notes: 
1) Make a failing test
2) Make it pass
3) Make it better 
*/
