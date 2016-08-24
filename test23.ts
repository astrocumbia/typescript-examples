enum Direction {
	up = 1,
	Down,
	Left,
	Right
}

enum Enum {
	A
}

let a = Enum.A;
let nameOfA = Enum[Enum.A];

console.log(a);
console.log(nameOfA);

const enum Mapi {
	A = 1,
	B = A * 2
}

const enum Directions {
	Up,
	Down,
	Left,
	Right
}

declare enum Enumi {
	A = 1,
	B,
	C = 2
}

console.log("Mapi.A " + Mapi.A);
console.log("Mapi.B " + Mapi.B);

console.log("Up\t" + Directions.Up );
console.log("Down\t" + Directions.Down );
console.log("Left\t" + Directions.Left );
console.log("Right\t" + Directions.Right );

console.log("Enumi.A " + Enumi.A);
console.log("Enumi.B " + Enumi.B);
console.log("Enumi.C " + Enumi.C);