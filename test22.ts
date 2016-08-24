class BeeKeeper {
	hasMask: boolean;
}

class ZooKeeper {
	nametag: string;
}

class Animal {
	numLegs: number;
}

class Bee extends Animal {
	keeper: BeeKeeper;
}

class Lion extends Animal {
	keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (a: {new(): A;
	prototype: {keeper: K}}): K{
	return a.prototype.keeper;
}

let lionKeeper = findKeeper(Lion);
let beeKeeper = findKeeper(Bee);

console.log( lionKeeper );
console.log( beeKeeper );