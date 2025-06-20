const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  // When input gets focus, add 'focused' class
  input.addEventListener('focus', () => {
    input.classList.add('focused');
  });
  // When input loses focus, remove 'focused' class
  input.addEventListener('blur', () => {
    input.classList.remove('focused');
  });

  input.addEventListener('input', () => {
    // Allow only digits
    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    }
  });
});

// Optional: autofocus first input on page load
window.addEventListener('load', () => {
  inputs[0].focus();
});
