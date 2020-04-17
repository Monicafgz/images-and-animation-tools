const btn = document.getElementById('btn-js');
btn.addEventListener('click', (event) => {
  const media = document.getElementById('flotante');
  if (media.style.display === 'none') {
    media.style.display = 'block';
    btn.innerHTML = 'Ocultar vídeos';
  } else {
    media.style.display = 'none';
    btn.innerHTML = 'Mostrar vídeos';
  }
});
