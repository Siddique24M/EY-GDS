function convertTemperature() {
    // Get input values
    var celsiusInput = document.getElementById('celsiusInput').value;
    var fahrenheitInput = document.getElementById('fahrenheitInput').value;

    // Check if both inputs are empty
    if (!celsiusInput && !fahrenheitInput) {
        alert('Please enter a temperature value.');
        return;
    }

    // Convert Celsius to Fahrenheit
    if (celsiusInput) {
        var celsiusValue = parseFloat(celsiusInput);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        document.getElementById('fahrenheitInput').value = fahrenheitValue.toFixed(2);
    }

    // Convert Fahrenheit to Celsius
    if (fahrenheitInput) {
        var fahrenheitValue = parseFloat(fahrenheitInput);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.getElementById('celsiusInput').value = celsiusValue.toFixed(2);
    }
}
