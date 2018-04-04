/*jslint
    node
*/
import assert from "assert";
import {makeGreeter} from "./index.mjs";

const rle = "\u202b";
const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian"),
    "greek": makeGreeter("Greek"),
    "french": makeGreeter("French"),
    "german": makeGreeter("German"),
    "dutch": makeGreeter("Dutch"),
    "korean": makeGreeter("Korean"),
    "japanese": makeGreeter("Japanese"),
    "chinese": makeGreeter("Chinese"),
    "arabic": makeGreeter("Arabic")
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
assert.equal(greet.japanese(), "こんにちは 世界!");
assert.equal(greet.dutch(), "Hallo wereld!");
assert.equal(greet.korean(), "여보세요 세계!");
assert.equal(greet.chinese(), "你好世界");
assert.equal(greet.arabic(), rle + "مرحبا بالعالم" + "!");
assert.equal(greet.arabic(), rle + "\u0645\u0631\u062D\u0628\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645" + "!");

console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
