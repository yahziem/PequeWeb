const galleryContainer = document.getElementById('galleryContainer');

// Puedes reemplazar estas URL con las de tus propias imágenes
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
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.objectFit = 'cover'; // Ajuste para que la imagen se ajuste correctamente al tamaño definido

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
