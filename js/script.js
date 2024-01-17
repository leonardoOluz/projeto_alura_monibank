const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
})

function verificarCampo(campo){
    
}