/*jslint
    node
*/
"use strict";
import assert from "assert";

function makeGreeting(name = "world") {
    return "Hello" + " " + name + "!";
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
