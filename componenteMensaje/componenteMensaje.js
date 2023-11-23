
    document.getElementById('showMessage').addEventListener('click', () => {
      const customEvent = new CustomEvent('actualizar-mensaje', { detail: { mensaje: 'Juliana Escobar, Marco Espín' } });
      document.dispatchEvent(customEvent);
    });

    document.addEventListener('actualizar-mensaje', (event) => {
      document.getElementById('messageBox').value = event.detail.mensaje;
    });
