function toggleAcc(card) {
  card.classList.toggle('open');
}

function showTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: document.querySelector('.nav-wrapper').offsetTop, behavior: 'smooth' });
  if (id === 'audiencia') {
    setTimeout(() => {
      document.querySelectorAll('.data-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
    }, 300);
  }
}

function scrollNav(dir) {
  const nav = document.getElementById('mainNav');
  nav.scrollBy({ left: dir * 160, behavior: 'smooth' });
  setTimeout(updateNavChevrons, 320);
}

function updateNavChevrons() {
  const nav = document.getElementById('mainNav');
  const left = document.getElementById('navChevLeft');
  const right = document.getElementById('navChevRight');
  if (!nav || !left || !right) return;
  left.classList.toggle('hidden', nav.scrollLeft <= 0);
  right.classList.toggle('hidden', nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 1);
}

setTimeout(() => {
  document.querySelectorAll('.data-bar-fill').forEach(bar => {
    bar.style.width = bar.getAttribute('data-width') + '%';
  });
}, 600);

const mainNav = document.getElementById('mainNav');
if (mainNav) {
  mainNav.addEventListener('scroll', updateNavChevrons);
  window.addEventListener('resize', updateNavChevrons);
  updateNavChevrons();
}
