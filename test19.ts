class Person {
	name: string;

	constructor( name: string ){
		this.name = name;
	}
}

function identity<T>(arg: T): T {
	return arg;
}

let outpot: any;

outpot = identity<string>("myString");
console.log(  typeof outpot );

let output = identity<number>(12);
console.log(  typeof output );

outpot = new Person("irvin");
console.log( outpot );
console.log( typeof outpot );
