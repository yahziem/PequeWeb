const galleryContainer = document.getElementById('galleryContainer');

// Puedes reemplazar estas URL con las de tus propias imágenes
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor1.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor2.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor3.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/Inicio/flor4.jpg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/refs/heads/main/Gl/Inicio/flor5.jpeg',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/refs/heads/main/Gl/Inicio/flor6.jpeg',
    
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
  // Comprobar si ya se ha dado el consentimiento
  window.onload = function() {
    if (!localStorage.getItem('cookies-accepted')) {
      document.getElementById('cookie-banner').style.display = 'block';
    } else {
      document.getElementById('cookie-banner').style.display = 'none';
    }
  };

  // Función para aceptar las cookies
  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'true'); // Guardar la preferencia
    document.getElementById('cookie-banner').style.display = 'none'; // Ocultar el banner
    // Aquí se puede cargar Google Analytics si es aceptado
    gtag('config', 'G-V3TYXL31NM');
  });

  // Función para rechazar las cookies
  document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies-accepted', 'false'); // Guardar la preferencia
    document.getElementById('cookie-banner').style.display = 'none'; // Ocultar el banner
    // Aquí puedes bloquear la carga de Google Analytics si se rechaza
  });