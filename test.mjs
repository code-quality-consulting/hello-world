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
assert.equal(greet.russian(), "\u041F\u0440\u0438\u0432\u0435\u0442 \u043c\u0438\u0440!");
assert.equal(greet.greek(), "\u03B3\u03B5\u03B9\u03AC \u03C3\u03BF\u03BD \u03BA\u03CC\u03C3\u03BC\u03BF\u03C2!");


console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
