document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.gallery-item img');  // Seleccionamos todas las imágenes dentro de gallery-item

    images.forEach(function (img) {
        img.addEventListener('click', function () {
            const weaponName = this.getAttribute('data-name');  // Obtenemos el valor del atributo data-name
            alert('Nombre: ' + weaponName);
        });
    });
}); 
