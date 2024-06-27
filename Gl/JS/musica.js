const galleryContainer = document.getElementById('galleryContainer');

// Rutas de las imágenes locales (relativas al servidor)
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/1.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/2.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/3.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/4.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/5.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/6.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/7.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/8.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/9.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/10.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/12.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/13.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/14.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/15.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/16.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/17.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/18.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/19.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/20.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/21.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/22.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/23.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/24.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/25.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/26.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/27.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/28.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/29.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/30.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/31.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/32.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/33.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/34.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/35.png',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Canciones/36.png',
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