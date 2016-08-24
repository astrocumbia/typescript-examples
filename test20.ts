class GenericNumbers<T> {
	zeroValue: T;
	add: (x:T, y:T) => T;
}

let myGenericNumber = new GenericNumbers<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) { return x+y; }

console.log( myGenericNumber );