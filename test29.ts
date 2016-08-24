///<reference path="./node_modules/angular2/typings/browser.d.ts"/>

let someArray = [1, "string", false];
let list = [4,5,6,7,8,9];

console.log("===OF===");
for (let entry of someArray) {
	console.log(entry);
}

console.log("====IN====");
for (let i in list ) {
	console.log( i + " => " + list[i] );
}


console.log("===PETS===");
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

console.log("===numbers===");

let numbers = [1,2,3,4];

for (let num of numbers) {
	console.log(num);
}





