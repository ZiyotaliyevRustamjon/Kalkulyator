let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonValue = this.innerHTML;
        if (buttonValue === "C") {
            input.value = "";
        }
        else if (buttonValue === "CE") {
            let inputValue = input.value;
            input.value = inputValue.slice(0, -1);
        }
        else if (buttonValue === "%") {
            let inputValue = input.value;
            input.value = inputValue / 100;
        }
        else if (buttonValue === "=") {
            let inputValue = input.value;
            let result = eval(inputValue);
            input.value = result;
        }
        else {
            input.value += buttonValue;
        }
    });
}