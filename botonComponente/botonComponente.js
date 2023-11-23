const customEvent = new CustomEvent('actualizar-mensaje', { detail: { mensaje: 'Nuevo mensaje' } });
document.getElementById('showMessage').addEventListener('click', () => {
  document.dispatchEvent(customEvent);
});