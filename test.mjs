/*jslint
    node
*/
import assert from "assert";
import {makeGreeting, makeGreeter} from "./index.mjs";

const makeEnglishGreeting = makeGreeter("English");
assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
assert.equal(makeGreeting("", "Spanish"), "\u00A1Hola Mundo!");
assert.equal(
    makeGreeting("Andr\u00E9s", "Spanish"),
    "\u00A1Hola Andr\u00E9s!"
);
console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
