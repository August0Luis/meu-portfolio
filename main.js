var i = 0;
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
function aparecerTextoGit() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.";
}
function aparecerTextoBootstrap() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web.";
}
function aparecerTextoReact() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
}
function reset() {
  document.querySelector(".conhecimento__informacoes").innerHTML = "*passe o cursor do mouse no card para ler*";
}
