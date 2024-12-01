const galleryContainer = document.getElementById('galleryContainer');
// URLs de las imágenes
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/27.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/29.jfif ',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/1.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/2.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/3.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/4.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/5.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/6.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/7.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/8.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/9.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/10.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/11.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/12.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/13.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/14.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/15.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/16.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/17.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/18.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/19.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/20.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/21.jfif',        
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/23.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/24.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/25.jfif',    
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/26.jfif',        
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/28.jfif',        
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/30.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/31.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/32.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/33.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/34.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/35.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/36.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/37.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/38.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/39.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/40.jfif ', 
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/41.jfif ', 
    // Agrega más URL de imágenes según sea necesario
];

function createGalleryItem(url) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen no disponible';

    // Imagen de reserva en caso de error
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/300?text=Error';
        img.alt = 'Error al cargar la imagen';
    };

    // Evento de clic para agrandar la imagen
    imgContainer.addEventListener('click', () => {
        openImage(imgContainer);
    });

    // Botón de cerrar
    const closeButton = document.createElement('imagen');
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        closeImage(imgContainer);
    });

    imgContainer.appendChild(img);
    item.appendChild(imgContainer);
    galleryContainer.appendChild(item);
}
// Crear elementos de la galería
imageUrls.forEach(url => createGalleryItem(url));

// Cerrar al hacer clic fuera de la imagen
document.addEventListener('click', (e) => {
    const enlargedImg = document.querySelector('.img-container.enlarged');
    if (enlargedImg && !enlargedImg.contains(e.target)) {
        closeImage(enlargedImg);
    }
});