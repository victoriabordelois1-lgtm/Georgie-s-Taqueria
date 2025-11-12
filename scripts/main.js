document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ JS conectado correctamente");

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      console.log("click detectado en menú");
      nav.classList.toggle('show');
    });
  }

  const form = document.getElementById('reservaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.nombre.value;
      const fecha = form.fecha.value;
      const personas = form.personas.value;
      alert(`Reserva recibida:\n${nombre}\n${fecha} — ${personas} personas\n\nGuardamos tu mesa por 15 minutos.`);
      form.reset();
    });
  }
});