const numeroCerto = Math.ceil(Math.random() * 10);

function pegarChute() {
  const valorDoUsuario = document.querySelector("input").value;
  const p = document.querySelector("p");

  if (numeroCerto == valorDoUsuario) {
    p.textContent = "Você acertou!";
    setTimeout(() => {}, 5000);
  } else {
    p.textContent = "Você errou!";
  }
}

document.querySelector("button").addEventListener("click", pegarChute);

console.log(numeroCerto);
