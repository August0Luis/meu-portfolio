var i = 0;
// var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 100;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

typeWriter();

function aparecerTextoHtml() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.";
}
function aparecerTextoCss() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "CSS é uma linguagem de folha de estilo composta por 'camadas', criado com o propósito de estilizar as páginas HTML";
}
function aparecerTextoJs() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma";
}
function reset() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "*passe o cursor do mouse no card para ler*";
}