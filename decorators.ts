function f() {
	console.log("f(): evaluated");
	return function (target, propertyKey: string, descriptor: PropertyDescriptor){
		console.log("f(): called");
	}
}

function g() {
	console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

function one() {
	return 1;
}

function double(x:number) {
	console.log( x*2 );
}



class C {
	@f()
	@g()
	
	method() {}
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}