import ehCpf from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
})

function verificarCampo(campo){
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehCpf(campo);
    };
}