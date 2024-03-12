// inisialisasi parameter
let weight = parseInt(document.getElementById("tb_weight").value);
let age = parseInt(document.getElementById("tb_age").value);
let height = parseInt(document.getElementById("tb_height").value);
let bmiResult = document.getElementById("bmivalue");
let weightStat = document.getElementById("weightstat");
let bmiInfo = document.getElementById("bmiinformation");
let bmiSummary1 = document.getElementById("bmisummary1");
let bmiSummary2 = document.getElementById("bmisummary2");

// menghitung nilai BMI
function calculate() {
	if (isNaN(weight) || isNaN(age) || isNaN(height)) {
		alert("Column must be filled out");
	} else {
		// menghitung nilai BMI
		var height_in_meter = height / 100;
		var bmi_value = weight / (height_in_meter * height_in_meter);

		// logika status BMI berdasarkan nilai BMI
		var weight_status, weight_info, weight_summary1, weight_summary2;
		if (bmi_value.toFixed(1) < 18.5) {
			weight_status = "Underweight";
			weight_info = "You Have Underweight Body";
			weight_summary1 = "BMI under 18.5";
			weight_summary2 =
				"You're Underweight, the best way to gain weight is eat more calorries and protein. it's recomended to gain your weight ";
		} else if (
			bmi_value.toFixed(1) >= 18.5 &&
			bmi_value.toFixed(1) <= 24.9
		) {
			weight_status = "Your Weight is Normal";
			weight_info = "You Have Ideal Body";
			weight_summary1 = "BMI result between 18.5 and 24.9";
			weight_summary2 =
				"Your weight is normal, Maintain your body balance by consuming a balanced amount of protein and calories, and regularly exercising.";
		} else if (
			bmi_value.toFixed(1) >= 25.0 &&
			bmi_value.toFixed(1) <= 29.9
		) {
			weight_status = "You're Overweight";
			weight_info = "You Have Overweight Body";
			weight_summary1 = "BMI result between 25.0 and 29.9";
			weight_summary2 =
				"You're overweight,The best way to lose weight is by managing the calorie intake of the food you consume and exercising regularly.";
		} else {
			weight_status = "You're Obesity";
			weight_info = "You Have Obesity";
			weight_summary1 = "BMI result more than 29.9";
			weight_summary2 =
				"You're extremly overweight, please consult with a nutritionist and doctor immediately.";
		}
		// tampilkan hasil BMI
		bmiResult.innerHTML = bmi_value.toFixed(1);
		weightStat.innerHTML = weight_status;
		bmiInfo.innerHTML = weight_info;
		bmiSummary1.innerHTML = weight_summary1;
		bmiSummary2.innerHTML = weight_summary2;
	}
}
// untuk tombol yang tidak digunakan
function notuse() {
	if (isNaN(weight) || isNaN(age) || isNaN(height)) {
		alert("Column must be filled out");
	} else {
		alert("Not available for now");
	}
}
