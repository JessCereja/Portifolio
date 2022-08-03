import { valida } from "./script.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  input.addEventListener("click", (evento) => {
    valida(evento.target);
  });
});

textarea.forEach((input) => {
  input.addEventListener("click", (evento) => {
    valida(evento.target);
  });
});
