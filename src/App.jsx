import "./App.css";
import { createClient } from "@supabase/supabase-js";

function app() {
	let mediumBmi;
	const bmiResult = document.createElement("h1");
	bmiResult.setAttribute("id", "result");


	const calculate = () => {
		const weightInput = document.getElementById("weightInput").value;
		const heightInput = document.getElementById("heightInput").value;
		document.body.appendChild(bmiResult);
		const weight = Number.parseFloat(weightInput);
		const height = Number.parseFloat(heightInput / 100);
		const isHeightDecimal = String(heightInput).includes(".");

		if (
			weight > 0 &&
			height > 0 &&
			weight <= 500 &&
			heightInput <= 300 &&
			!isHeightDecimal
		) {
			const BMI = weight / (height * height);

			console.log(BMI.toFixed(2));
			bmiResult.innerHTML = `BMI: ${BMI.toFixed(2)}`;
		} else {
			console.error("Please, use a valid number");
			bmiResult.innerHTML = "Please, use a valid number";
		}
	};

	return (
		<>
			<h1>BMI Calculator</h1>
			<div id="calculator">
				<label htmlFor="Peso">Weight</label>
				<input type="number" placeholder="(KG)" id="weightInput" required />
				<label htmlFor="Altura">Height</label>
				<input
					type="number"
					inputMode="numeric"
					placeholder="(CM)"
					id="heightInput"
					required
				/>
				<button type="button" onClick={calculate}>
					Calculate
				</button>
			</div>
		</>
	);
}
export default app;
