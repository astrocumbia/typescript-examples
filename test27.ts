class BasicCalculator{

	public constructor(protected value: number = 0) {}

	public currentValue(): number {
		return this.value;
	}

	public add(operand: number) {
		this.value += operand;
		return this.value;
	}

	public multiply(operand: number) {
		this.value *= operand;
		return this.value;
	}
}

class ScientificCalculator extends BasicCalculator {
	public constructor(value = 0) {
		super(value);
	}

	public sin() {
		this.value = Math.sin(this.value);
		return this;
	}
}

let v = new BasicCalculator(2);
console.log( v.multiply(5) );
console.log( v.add(2) );
console.log( v.multiply(19) );

let sc = new ScientificCalculator(2)
			.multiply(5)
			.sin()
			.add(1)
			.currentValue();
