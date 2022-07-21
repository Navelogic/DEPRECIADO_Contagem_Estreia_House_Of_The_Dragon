const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const contagem = document.getElementById("contagem");

const estreiaHOTD = new Date("August 21 22 00:00:00");

// Atualização da Contagem
function atualizarContagem() {
  const tempoAtual = new Date();
  const diff = estreiaHOTD - tempoAtual;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Adicionando Valores no DOM
  dias.innerHTML = d;
  horas.innerHTML = h < 10 ? "0" + h : h;
  minutos.innerHTML = m < 10 ? "0" + m : m;
  segundos.innerHTML = s < 10 ? "0" + s : s;
}

// Atualização a cada milisegundo.
setInterval(atualizarContagem, 100);
