import ehCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
import mensagens from './objetoMessageValid.js';

const camposDoFormulario = document.querySelectorAll('[required]');
const envioFormulario = document.querySelector('[data-formulario]');

envioFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaCadastro = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaCadastro));

    window.location.href = './abrir-conta-form-2.html';

})

const tipoDeErros = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
]

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificarCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehCpf(campo);
    };

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    tipoDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);            
        }
    })

    const mensagemErros = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();
    
    if (!validadorDeInput) {
        mensagemErros.textContent = mensagem;
    } else {
        mensagemErros.textContent = "";
    }

}