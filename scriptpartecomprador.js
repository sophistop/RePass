const comprador1 = document.getElementById("compralugar1");
const comprador2 = document.getElementById("compralugar2");

comprador1.addEventListener("click", IrParaCompra1);
comprador2.addEventListener("click", IrParaCompra2);

function IrParaCompra1() {
   
    window.location.href = "purchasing1.html";
}

function IrParaCompra2() {
   
    window.location.href = "purchasing2.html";
}

   