const empresa = document.getElementById("empresa");
const comprador = document.getElementById("comprador");

empresa.addEventListener("click", IrParaEmpresa);
comprador.addEventListener("click", IrParaComprador);

function IrParaComprador() {
   
    window.location.href = "buyer.html";
}

function IrParaEmpresa() {
    
    window.location.href = "business.html";
}