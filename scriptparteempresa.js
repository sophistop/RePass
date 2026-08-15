const botaoalugar1 = document.getElementById("alugar1");
const botaoalugar2 = document.getElementById("alugar2");

botaoalugar1.addEventListener("click", IrParaAlugar1);

function IrParaAlugar1() {
   
    window.location.href = "rent1.html";
}

botaoalugar2.addEventListener("click", IrParaAlugar2);

function IrParaAlugar2() {
   
    window.location.href = "rent2.html";
}