const resultado = document.getElementById("resultado");
const digito1 = document.getElementById("input-1");
const digito2 = document.getElementById("input-2");
const digito3 = document.getElementById("input-3");
const digito4 = document.getElementById("input-4");
const digito5 = document.getElementById("input-5");
const digito6 = document.getElementById("input-6");
const digito7 = document.getElementById("input-7");
const digito8 = document.getElementById("input-8");
const botao = document.getElementById("botao");

const inputs = [digito1, digito2, digito3, digito4, digito5, digito6, digito7, digito8];

function calcularTotal(){
  
    const valor1 = digito1.value;
    const valor2 = digito2.value;
    const valor3 = digito3.value;
    const valor4 = digito4.value;
    const valor5 = digito5.value;
    const valor6 = digito6.value;
    const valor7 = digito7.value;
    const valor8 = digito8.value;
    let total = valor1 * 128 + valor2 * 64 + valor3 * 32 + valor4 * 16 + valor5 * 8 + valor6 * 4 + valor7 * 2 + valor8 * 1;
    resultado.textContent =  total;
}

inputs.forEach(input => {
  input.addEventListener('input', () => {
    calcularTotal();
  })
})
