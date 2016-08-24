interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

console.log( square );

square.color = "dark";
square.sideLength = 15;

console.log( square );