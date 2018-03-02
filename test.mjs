/*jslint
    node
*/
import assert from "assert";
import {makeGreeter} from "./index.mjs";

const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian"),
    "greek": makeGreeter("Greek"),
    "french": makeGreeter("French"),
    "german": makeGreeter("German"),
    "dutch": makeGreeter("Dutch"),
    "korean" : makeGreeter("Korean")
};

assert.equal(greet.english(), "Hello world!");
assert.equal(greet.english("Zach"), "Hello Zach!");
assert.equal(greet.spanish(), "¡Hola Mundo!");
assert.equal(
    greet.spanish("Andrés"),
    "¡Hola Andrés!"
);
assert.equal(greet.russian(), "Привет мир!");
assert.equal(greet.greek(), "γειά σον κόσμος!");
assert.equal(greet.french(), "Bonjour monde!");
assert.equal(greet.german(), "Hallo Welt!");
assert.equal(greet.dutch(), "Hallo wereld!");
assert.equal(greet.korean(), "여보세요 세계!");
console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
