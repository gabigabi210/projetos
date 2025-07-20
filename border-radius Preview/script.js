const exp = document.getElementById('experimento');
const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const botaoCopiar = document.getElementById("botaoCopiar");
const mensagem = document.getElementById("mensagem");

const inputs = [topLeft, topRight, bottomLeft, bottomRight];

function modificarBorda(){
  let valorTopLeft = topLeft.value + 'px';
  let valorTopRight = topRight.value + 'px';
  let valorBottomLeft = bottomLeft.value + 'px';
  let valorBottomRight = bottomRight.value + 'px';
  
  exp.style.borderTopLeftRadius = valorTopLeft;
  exp.style.borderTopRightRadius = valorTopRight;
  exp.style.borderBottomLeftRadius = valorBottomLeft;
  exp.style.borderBottomRightRadius = valorBottomRight;
}

inputs.forEach(input => {
  input.addEventListener('input', () =>{
  modificarBorda();
})
})

botaoCopiar.addEventListener('click', function(){
  const texto = 'border-radius: ' + topLeft.value + 'px ' + topRight.value + 'px ' + bottomLeft.value + 'px ' + bottomRight.value + 'px;';  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto)
    .then(() => {
      mensagem.textContent = 'Copiado com sucesso!';
    })
    .catch(err => {
      mensagem.textContent = 'Deu errado';
    });
  } else {
    mensagem.textContent = "Seu navegador não suporta a API Clipboard. Tente o método legado.";
  }
 })
