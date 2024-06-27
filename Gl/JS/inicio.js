const galleryContainer = document.getElementById('galleryContainer');

// Puedes reemplazar estas URL con las de tus propias imágenes
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor1.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor2.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor3.jpg',
    // Agrega más URL de imágenes según sea necesario
];

function createGalleryItem(url) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = url; // Cambiado para mostrar la URL de la imagen en caso de que el enlace esté roto

    // Establecer un tamaño fijo para todas las imágenes
    img.style.width = '500px'; // Cambiado a un tamaño más pequeño
    img.style.height = '500px'; // Cambiado a un tamaño más pequeño
    img.style.objectFit = 'cover'; // Ajuste para que la imagen se ajuste correctamente al tamaño definido

    imgContainer.addEventListener('click', () => {
        imgContainer.classList.toggle('enlarged');
    });

    imgContainer.appendChild(img);
    item.appendChild(imgContainer);
    galleryContainer.appendChild(item);
}

imageUrls.forEach(url => createGalleryItem(url));
