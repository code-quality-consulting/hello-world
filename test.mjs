/*jslint
    node
*/
import assert from "assert";
import {makeGreeter} from "./index.mjs";

const makeEnglishGreeting = makeGreeter("English");
const makeSpanishGreeting = makeGreeter("Spanish");
const makeRussianGreeting = makeGreeter("Russian");

assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeEnglishGreeting("Zach"), "Hello Zach!");
assert.equal(makeSpanishGreeting(), "\u00A1Hola Mundo!");
assert.equal(
    makeSpanishGreeting("Andr\u00E9s"),
    "\u00A1Hola Andr\u00E9s!"
);
assert.equal(makeRussianGreeting(), "Привет мир!");


console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
