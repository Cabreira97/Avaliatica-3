function calcularMedia() {
  const mediaValue = Number(document.getElementById("mediafinal").value);
  const inputs = document.querySelectorAll(".alunoInfo input");
  const res = document.getElementById("resultado");

  let notaGeral = 0;

  //repete 4 vezes e soma as medias e salva eu uma variavel
  for (let i = 1; i <= 4; i++) {
    notaGeral += Number(inputs[i].value);
  }

  let mediaFinal = notaGeral / 4;

  /*Verifica se a media e maior ou igual a media necessaria para ser aprovado.
  Caso seja retorna o valor correspondente
  */
  let aproRepro;
  if (mediaFinal >= mediaValue) {
    aproRepro = "Aprovada";
  } else {
    aproRepro = "Reprovado";
  }

  //Adiciona se foi aprovado ou reprovado
  res.innerHTML = `
    <div>
    <p>Olá ${inputs[0].value} </p>
    </div>
    <div>
    Sua media anual é:  ${mediaFinal}
    </div>
    <div>
    Você foi  ${aproRepro} 
    </div>
    `;

  //Deixa a area de resultado visivel para mostra o resultado
  res.style.visibility = "visible";
}
