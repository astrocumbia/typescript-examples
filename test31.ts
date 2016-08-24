///<reference path="./node_modules/angular2/typings/browser.d.ts"/>

let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");
let sym = Symbol();

let obj = {
	[sym]: "value",
}

console.log( sym2 === sym3 );
console.log( obj[sym] );


