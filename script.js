const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    // Allow only digits
    input.value = input.value.replace(/[^0-9]/g, '');

    // Move to next input if a digit is typed
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      // If current input has a value, clear it
      if (input.value) {
        input.value = '';
      }
      // If it's already empty, move back and clear the previous one
      else if (index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    }
  });
});
