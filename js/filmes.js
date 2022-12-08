// https://2.bp.blogspot.com/-tHtl2N1DMAE/Vyn9drdDmxI/AAAAAAAAXeU/CHa5x9ltKvsoI-PVDNw_51GQRZ_Ld_CpwCLcB/s1600/Star-Wars-IV-poster.jpg
// https://image.tmdb.org/t/p/original/s2ONgVK8ucLfobZn7VTyaAKH0yA.jpg
// https://br.web.img3.acsta.net/pictures/18/05/21/17/47/5103671.jpg

function adicionarFilme() {
  let filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilme(filmeFavorito);
  } else {
    console.error("Imagem inválida");
  }
  document.getElementById("filme").value = "";
}

function listarFilme(filme) {
  let elementoFilmeFavorito = "<img src=" + filme + ">";
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
