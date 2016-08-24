interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);

class Animal {
	name: string;
}

class Dog extends Animal {
	breed: string;
}

let dog: Dog;

dog = {name:"chuy", breed:"jiji"};
console.log(dog.name);
console.log(dog.breed);
