interface Named {
	name: string;
}

let x: Named;

let y = {name:"Alice", location: "Seatle"};

x = y;

console.log( x );