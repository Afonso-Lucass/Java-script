console.log('Olá mundo!');

// Criando título
let titulo = document.createElement('h1');
titulo.innerText = 'Relógio Digital';
titulo.style.color = 'white';
titulo.style.backgroundColor = 'black';
titulo.style.padding = '10px';
document.body.appendChild(titulo);

// Criando elemento do relógio
let relogio = document.createElement('h2');
relogio.style.fontSize = '3em';
relogio.style.color = 'blue';
document.body.appendChild(relogio);

// Função para atualizar o relógio
function atualizarRelogio() {
  let agora = new Date();
  let horas = String(agora.getHours()).padStart(2, '0');
  let minutos = String(agora.getMinutes()).padStart(2, '0');
  let segundos = String(agora.getSeconds()).padStart(2, '0');
  relogio.innerText = `${horas}:${minutos}:${segundos}`;
}

// Atualiza a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();


novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';