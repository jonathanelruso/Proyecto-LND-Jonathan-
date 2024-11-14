const Images = document.querySelectorAll('.gallery-item img');  // seleccionamos todas las imágenes dentro de gallery-item
Images.forEach(function (img) {
    img.addEventListener('click', function () {
        const Weapon_Name = this.getAttribute('data-name');  // obtenemos el valor del atributo data-name
        alert('Nombre: ' + Weapon_Name);
    });
});     