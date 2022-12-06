const celciusinp = document.getElementById("celcius")
const fahrenheitinp = document.getElementById("fahrenheit")
const kelvininp = document.getElementById("kelvin")

const inputs = document.getElementsByClassName("input")


for (let i = 0; i < inputs.length; i++) {
	let input = inputs[i];
	input.addEventListener("input", function (e) {
		let value = parseFloat(e.target.value);

		switch (e.target.name) {
			case "celcius":
				fahrenheitinp.value = (value * 1.8) + 32;
				kelvininp.value = value + 273.15;
				break;
			case "fahrenheit":
				celciusinp.value = (value - 32) / 1.8;
				kelvininp.value = (value - 32) / 1.8 + 273.15;
				break;
			case "kelvin":
				celciusinp.value = value - 273.15;
				fahrenheitinp.value = ((value - 273.15) * 1.8) + 32;
				break;
		}
	})
}
