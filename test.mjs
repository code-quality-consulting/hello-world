/*jslint
    node
*/
import assert from "assert";
import {makeGreeter} from "./index.mjs";

const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian"),
    "greek": makeGreeter("Greek")
};

assert.equal(greet.english(), "Hello world!");
assert.equal(greet.english("Zach"), "Hello Zach!");
assert.equal(greet.spanish(), "\u00A1Hola Mundo!");
assert.equal(
    greet.spanish("Andr\u00E9s"),
    "\u00A1Hola Andr\u00E9s!"
);
assert.equal(greet.russian(), "Привет мир!");
assert.equal(greet.greek(), "γειά σου κόσμος!");


console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
