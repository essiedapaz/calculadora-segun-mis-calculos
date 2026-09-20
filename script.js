const tela = document.getElementById("tela");
const botoes = document.querySelectorAll("#botoes button");

let expressao = "";

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const valor = botao.textContent;

    if (valor === "C") {
      expressao = "";
      tela.textContent = "0";
      return;
    }

    if (valor === "=") {
      try {
        expressao = String(eval(expressao));
        tela.textContent = expressao;
      } catch (erro) {
        tela.textContent = "Erro";
        expressao = "";
      }
      return;
    }

    expressao = expressao + valor;
    tela.textContent = expressao;
  });
});

const stickers = document.querySelectorAll(".sticker, .txtsticker");

stickers.forEach(function (sticker) {
  sticker.addEventListener("mousedown", function (evento) {
    evento.preventDefault();

    const caixa = sticker.getBoundingClientRect();
    const deslocX = evento.clientX - caixa.left;
    const deslocY = evento.clientY - caixa.top;

    sticker.style.cursor = "grabbing";
    sticker.style.zIndex = "99";

    function mover(e) {
      sticker.style.left = (e.clientX - deslocX) + "px";
      sticker.style.top = (e.clientY - deslocY) + "px";
      sticker.style.right = "auto";
      sticker.style.bottom = "auto";
    }

    function soltar() {
      sticker.style.cursor = "grab";
      document.removeEventListener("mousemove", mover);
      document.removeEventListener("mouseup", soltar);
    }

    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
  });
});