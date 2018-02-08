/*jslint
    node
*/
"use strict";
import assert from "assert";
import {makeGreeting} from "./index.mjs";

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
assert.equal(makeGreeting("","Spanish"),"\u00A1Hola Mundo!");
console.log("success");

/*
Notes:
1) Make a failing test
2) Make it pass
3) Make it better
*/
