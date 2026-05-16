// 1. CONFIGURACIÓN E INICIALIZACIÓN DE FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-storage.js";

// ⚠️ REEMPLAZA ESTO CON TUS DATOS REALES DE LA CONSOLA DE FIREBASE
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializamos los servicios (¡Esto era lo que faltaba!)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// 2. ELEMENTOS DEL DOM
const galleryContainer = document.getElementById('galleryContainer');
const uploadBtn = document.getElementById('uploadBtn');
const imageUpload = document.getElementById('imageUpload');

// 3. IMÁGENES EXISTENTES (HARDCODEADAS)
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/27.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/29.jfif',
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
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/30.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/31.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/32.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/33.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/34.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/35.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/36.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/37.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/38.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/39.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/40.jfif',
    'https://raw.githubusercontent.com/yahziem/PequeWeb/main/Gl/fotos/41.jfif'
];

// 4. FUNCIÓN PARA CREAR ELEMENTOS EN LA GALERÍA
function createGalleryItem(url) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen de la galería';

    // Manejo de error si la imagen no carga
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/300?text=Error+al+cargar';
    };

    // Evento de Zoom interactivo
    imgContainer.addEventListener('click', (e) => {
        // Evitamos que interfiera con otros clics si fuera necesario
        if (imgContainer.classList.contains('enlarged')) {
            imgContainer.classList.remove('enlarged');
        } else {
            // Removemos el zoom de cualquier otra imagen abierta antes
            document.querySelectorAll('.img-container').forEach(el => {
                el.classList.remove('enlarged');
            });
            imgContainer.classList.add('enlarged');
        }
    });

    imgContainer.appendChild(img);
    item.appendChild(imgContainer);
    galleryContainer.appendChild(item);
}

// 5. RENDERIZAR IMÁGENES INICIALES (GITHUB)
imageUrls.forEach(url => createGalleryItem(url));

// 6. CONTROL DEL PIN DE SUBIDA
uploadBtn.addEventListener('click', () => {
    const pin = prompt('🔒 Ingresa el PIN\n\nPista: es el número de bloqueo de mi teléfono');
    
    if (pin !== '0817') {
        alert('❌ PIN incorrecto');
        return;
    }
    imageUpload.click();
});

// 7. EVENTO SUBIR NUEVA IMAGEN A FIREBASE
imageUpload.addEventListener('change', async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    // Deshabilitar botón temporalmente para evitar doble envío
    uploadBtn.disabled = true;
    uploadBtn.innerText = 'Subiendo... ⏳';

    for (const file of files) {
        try {
            const fileName = `${Date.now()}-${file.name}`;
            const storageRef = ref(storage, `galeria/${fileName}`);

            // 1. Subir el archivo físico a Storage
            await uploadBytes(storageRef, file);

            // 2. Obtener la URL de descarga
            const downloadURL = await getDownloadURL(storageRef);

            // 3. Guardar la referencia de la URL en Firestore
            await addDoc(collection(db, "imagenes"), {
                url: downloadURL,
                fecha: new Date()
            });

            // 4. Pintarla de inmediato en la pantalla
            createGalleryItem(downloadURL);

        } catch (error) {
            console.error("Error al subir el archivo:", error);
            alert("Hubo un problema al subir la imagen.");
        }
    }

    // Restaurar botón
    uploadBtn.disabled = false;
    uploadBtn.innerText = 'Subir Imagen';
    imageUpload.value = ''; // Resetear el input file
});

// 8. CARGAR IMÁGENES DESDE FIREBASE (AL INICIAR)
async function cargarImagenesFirebase() {
    try {
        const querySnapshot = await getDocs(collection(db, "imagenes"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.url) {
                createGalleryItem(data.url);
            }
        });
    } catch (error) {
        console.error("Error al traer imágenes de Firebase:", error);
    }
}

// Ejecutar la carga desde la base de datos
cargarImagenesFirebase();