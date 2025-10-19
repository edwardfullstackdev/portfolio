document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Portafolio cargado correctamente");
  alert("🚀 Bienvenido al portafolio de Edward");

  // Animación de entrada
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
    el.classList.add('visible');
  });
});
