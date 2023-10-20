
const convertCelsiusToFahrenheit = (celsius) => {
return (celsius * 9/5) + 32;
};

document.getElementById("convertButton").addEventListener("click", () => {
const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
if (!isNaN(celsiusInput)) {
 const fahrenheitResult = convertCelsiusToFahrenheit(celsiusInput);
 document.getElementById("fahrenheitResult").textContent = fahrenheitResult.toFixed(2);
} else {
 alert("Please enter a valid number for Celsius temperature.");
}
});
