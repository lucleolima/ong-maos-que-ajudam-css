// Componentes de feedback: validação do formulário, modal de confirmação e toast.

// ---------- Toast: mensagem curta que some sozinha ----------
const toast = document.getElementById('toast');
let temporizadorToast;

// tipo "erro" troca a cor e o ícone do toast
function mostrarToast(mensagem, tipo) {
  if (!toast) return;
  toast.textContent = mensagem;
  toast.classList.toggle('toast-erro', tipo === 'erro');
  toast.classList.add('toast-visivel');
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(function () {
    toast.classList.remove('toast-visivel');
  }, 3000);
}

// ---------- Botões "copiar" (chave PIX na página de projetos) ----------
document.querySelectorAll('[data-copiar]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const texto = botao.getAttribute('data-copiar');
    navigator.clipboard.writeText(texto)
      .then(function () { mostrarToast('Chave PIX copiada!'); })
      .catch(function () { mostrarToast('Não foi possível copiar. Chave: ' + texto, 'erro'); });
  });
});

// ---------- Formulário de cadastro ----------
const formulario = document.getElementById('form-cadastro');
const alertaErro = document.getElementById('alerta-erro');
const modal = document.getElementById('modal-sucesso');

if (formulario) {
  // novalidate desliga os balões nativos; a validação continua pelo checkValidity()
  formulario.setAttribute('novalidate', '');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
      // Mostra todos os erros de uma vez e leva o foco ao primeiro campo inválido
      formulario.classList.add('validado');
      alertaErro.hidden = false;
      formulario.querySelector('input:invalid, select:invalid, textarea:invalid').focus();
      return;
    }

    // Sem back-end: simulamos o envio com sucesso
    formulario.classList.remove('validado');
    alertaErro.hidden = true;
    formulario.reset();
    modal.showModal();
  });

  formulario.addEventListener('reset', function () {
    formulario.classList.remove('validado');
    alertaErro.hidden = true;
  });
}

if (modal) {
  modal.querySelector('[data-fechar-modal]').addEventListener('click', function () {
    modal.close();
  });

  // Clique fora da caixa (no fundo escuro) também fecha
  modal.addEventListener('click', function (evento) {
    if (evento.target === modal) modal.close();
  });
}
