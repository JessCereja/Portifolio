//validação

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostraMensagemDeErro(tipoDeInput, input);
  }
}

//tipos de erros tratados
const tiposDeErro = ["valueMissing", "typeMismatch"];

//mensagens de erro customizadas
const mensagensDeErro = {
  nome: {
    valueMissing: "O campo Nome deve ser preenchido.",
  },
  email: {
    valueMissing: "O campo E-mail deve ser preenchido.",
    typeMismatch: "Digite um formato válido de E-mail.",
  },
  assunto: {
    valueMissing: "O campo Assunto deve ser preenchido.",
  },
  mensagem: {
    valueMissing: "O campo Mensagem deve ser preenchido.",
  },
};

//objeto constando os tipos de input
const validadores = {};

//funçaõ para mostrar msg de erro
function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });

  return mensagem;
}

//validar botão enviar \0/
(function () {
  "use strict";

  var btn = document.getElementById("#botao");

  btn.disabled = true;

  var inputs = document.getElementsByClassName("input");

  inputs.addEventListener("change", function () {
    if (inputs.value === "") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  });
});
