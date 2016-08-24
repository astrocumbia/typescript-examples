interface LabelledValue {
	label: string;
}

function printLabel(labelledObjt: LabelledValue) {
	console.log(labelledObjt.label);
}

let myObj = {size:10, label: "label size is 10"};

printLabel( myObj );