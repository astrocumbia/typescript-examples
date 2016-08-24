class Greeter {
	static standardGreeting = "Hello there";
	greeting: string;

	greet() {
		if (this.greeting) {
			return "Hello, " + this.greeting;
		}
		else {
			return Greeter.standardGreeting;
		}
	}
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter;
greeter2 = new Greeter();
console.log(greeter2.greet());