let inputbox = document.getElementById("output");
function display(num) {
  inputbox.value += num;
}

function calculate() {
  try {
    inputbox.value = eval(inputbox.value);
  } catch (err) {
    alert("PLEASE ENTER A VALID CALCULATION");
  }
}

function deletevalue() {
  inputbox.value = inputbox.value.slice(0, -1);
}
function clearvalue() {
  inputbox.value = "";
}
