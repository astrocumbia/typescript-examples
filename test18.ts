function add(x, y) {
	return x + y;
}

let myAdd = function(x, y) { return x + y;}

console.log( add(10,1) );
console.log( myAdd(1,2) );

function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log( employeeName );
