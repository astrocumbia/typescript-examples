let sym1 = Symbol("key");
let sym2 = Symbol();
let sym3 = Symbol("key");

console.log( sym1 === sym3 );

console.log(sym1);
console.log(sym2);


let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"
console.log( sym1.split() );
