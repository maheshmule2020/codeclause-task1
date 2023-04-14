function convert() {
	// Get input value and units
	let inputValue = parseFloat(document.getElementById("inputValue").value);
	let unitFrom = document.getElementById("selectFrom").value;
	let unitTo = document.getElementById("selectTo").value;

	// Define conversion factors
	const conversionFactors = {
		"m": {
			"km": 0.001,
			"cm": 100,
			"in": 39.37,
			"ft": 3.281,
			"m": 1
		},
		"km": {
			"m": 1000,
			"cm": 100000,
			"in": 39370.1,
			"ft": 3280.84,
			"km": 1
		},
		"cm": {
			"m": 0.01,
			"km": 0.00001,
			"in": 0.3937,
			"ft": 0.0328,
			"cm": 1
		},
		"in": {
			"m": 0.0254,
			"km": 0.0000254,
			"cm": 2.54,
			"ft": 0.0833,
			"in": 1
		},
		"ft": {
			"m": 0.3048,
			"km": 0.0003048,
			"cm": 30.48,
			"in": 12,
			"ft": 1
		}
	};

	// Perform the conversion calculation
	let resultValue = inputValue * conversionFactors[unitFrom][unitTo];

	// Display the result
	let resultText = inputValue + " " + unitFrom + " = " + resultValue.toFixed(2) + " " + unitTo;
	document.getElementById("result").innerHTML = resultText;
}
