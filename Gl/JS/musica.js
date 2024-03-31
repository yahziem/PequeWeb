const galleryContainer = document.getElementById('galleryContainer');

// Rutas de las imágenes locales (relativas al servidor)
const imageUrls = [
    'https://yahzi.000webhostapp.com/Gl/Canciones/1.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/2.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/3.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/4.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/5.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/6.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/7.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/8.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/9.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/10.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/12.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/13.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/14.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/15.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/16.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/17.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/18.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/19.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/20.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/21.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/22.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/23.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/24.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/25.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/26.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/27.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/28.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/29.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/30.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/31.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/32.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/33.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/34.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/35.png',
    'https://yahzi.000webhostapp.com/Gl/Canciones/36.png',
    
    // Agrega más rutas de imágenes locales según sea necesario
];

function createGalleryItem(url) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = url; // Cambiado para mostrar la URL de la imagen en caso de que el enlace esté roto

    // Agregar evento de clic para agrandar la imagen
    imgContainer.addEventListener('click', () => {
        imgContainer.classList.toggle('enlarged');
    });

    imgContainer.appendChild(img);
    item.appendChild(imgContainer);
    galleryContainer.appendChild(item);
}

// Crear elementos de la galería para cada URL de imagen
imageUrls.forEach(url => createGalleryItem(url));