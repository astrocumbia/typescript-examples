namespace Validation {

	export interface StringValidator {
		isAcceptable(s: string): boolean;
	}

	const letterRegexp = /^[A-Za-z]+$/;
	const numberRegexp = /^[0-9]+$/;

	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return letterRegexp.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator {
		isAcceptable(s: string) {
			return s.length === 5 && numberRegexp.test(s);
		}
	}

}

let strings = ["Hello", "8934", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (var name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}
