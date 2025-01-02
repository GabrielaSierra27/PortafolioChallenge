//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Selecciona todos los campos de texto, incluyendo los textarea
const camposTexto = document.querySelectorAll('.contacto__campo');

// Ajusta el tamaño dinámicamente al escribir
camposTexto.forEach(campo => {
    campo.addEventListener('input', function () {
        if (this.tagName.toLowerCase() === 'textarea') {
            this.style.height = 'auto'; // Reinicia el alto
            this.style.height = this.scrollHeight + 'px'; // Ajusta según el contenido
        } else {
            this.style.width = this.value.length > 20 ? '100%' : '50%'; // Ajusta el ancho si es un input
        }
    });
});
