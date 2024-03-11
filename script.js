const Text = document.querySelector("h3");
const InputColor = document.querySelector(".InputColor");
const InputColorValue = document.querySelector(".InputColorValue");
const body = document.querySelector("#Body-gradient");

const SetGradient = () => {
  body.style.background =
    "linear-gradient(to right, " +
    InputColor.value +
    ", " +
    InputColorValue.value +
    ")";

    Text.textContent=body.style.background + ";";
};
InputColor.addEventListener("input", SetGradient);
InputColorValue.addEventListener("input", SetGradient);
