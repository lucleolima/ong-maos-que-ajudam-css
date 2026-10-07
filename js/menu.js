// Menu responsivo: no celular, o botão "Menu" abre e fecha a navegação.
// A classe "js" no <html> avisa o CSS que o JavaScript está ativo;
// sem ela, o menu fica sempre visível (o site continua navegável).

document.documentElement.classList.add('js');

const botaoMenu = document.querySelector('.botao-menu');
const menu = document.getElementById('menu-principal');

function alternarMenu(abrir) {
  botaoMenu.setAttribute('aria-expanded', String(abrir));
  menu.classList.toggle('menu-aberto', abrir);
}

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', function () {
    const estaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
    alternarMenu(!estaAberto);
  });

  // Esc fecha o menu e devolve o foco ao botão
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && menu.classList.contains('menu-aberto')) {
      alternarMenu(false);
      botaoMenu.focus();
    }
  });

  // Ao voltar para tela grande, garante que o estado do celular não fique preso
  window.matchMedia('(min-width: 768px)').addEventListener('change', function () {
    alternarMenu(false);
  });
}
