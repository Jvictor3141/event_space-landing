const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-header nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
  });
});

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const name = new FormData(form).get('name').trim().split(/\s+/)[0];
  formStatus.textContent = `Obrigado, ${name}! Seu pedido foi registrado nesta demonstração. Nossa equipe entraria em contato em breve.`;
  form.reset();
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
