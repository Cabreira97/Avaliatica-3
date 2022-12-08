function logar() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const erro = document.querySelector("#spanErro");

  if (login == "admin" && senha == "admin") {
    location.href = "home.html";
  } else {
    erro.innerText = "Usuario ou senha incorretos";
    document.querySelector("body").setAttribute("class", "erro");
  }
}
