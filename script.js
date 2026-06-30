const empresa = document.getElementById("empresa");
const comprador = document.getElementById("comprador");

empresa.addEventListener("click", executarAcao);
comprador.addEventListener("click", executarAcao);

function executarAcao() {
   
    window.location.href = "buyer.html";
}