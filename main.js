const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
	let input = inputs[i];

	input.addEventListener("input", function (e) {
		let value = parseFloat(e.target.value);
		
		switch (e.target.name) {
			case "fahrenheit":
				celsiusInput.value = (value - 32) / 1.8;
				break;
			case "celsius":
				fahrenheitInput.value = (value * 1.8) + 32;
				break;
		}
	});
}