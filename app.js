let display = document.getElementById("display");

function oppendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calulate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value(Error);
  }
}
