// Menu Hamburger para Mobile
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
});

// Scroll Suave para links internos
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.innerWidth <= 768) {
      navbar.style.display = 'none';
    }
  });
});

// Aparecer cards ao rolar a página
const cards = document.querySelectorAll('.card, .especial-card, .review');

const appearOnScroll = () => {
  const windowBottom = window.innerHeight + window.scrollY;
  cards.forEach(card => {
    const cardTop = card.offsetTop + card.offsetHeight / 4;
    if (windowBottom > cardTop) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
};

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);
