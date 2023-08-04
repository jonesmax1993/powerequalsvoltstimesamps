function calculate() {
  const powerInput = document.getElementById("power");
  const voltageInput = document.getElementById("voltage");
  const currentInput = document.getElementById("current");
  const resultElement = document.getElementById("result");

  const power = parseFloat(powerInput.value);
  const voltage = parseFloat(voltageInput.value);
  const current = parseFloat(currentInput.value);

  if (!isNaN(power) && !isNaN(voltage) && isNaN(current)) {
    const calculatedCurrent = power / voltage;
    resultElement.textContent = `Current: ${calculatedCurrent.toFixed(2)} Amps`;
  } else if (!isNaN(power) && isNaN(voltage) && !isNaN(current)) {
    const calculatedVoltage = power / current;
    resultElement.textContent = `Voltage: ${calculatedVoltage.toFixed(2)} Volts`;
  } else if (isNaN(power) && !isNaN(voltage) && !isNaN(current)) {
    const calculatedPower = voltage * current;
    resultElement.textContent = `Power: ${calculatedPower.toFixed(2)} Watts`;
  } else {
    resultElement.textContent = "";
  }
}
