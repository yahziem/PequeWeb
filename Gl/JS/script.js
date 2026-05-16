// ===============================
// FIREBASE IMPORTS
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-storage.js";

// ===============================
// CONFIG FIREBASE
// ===============================

const firebaseConfig = {
    apiKey: "AIzaSyAGLXh7unKGpJvBXKOMiqKuD2Fo21Ufuxc",
    authDomain: "peque-web.firebaseapp.com",
    projectId: "peque-web",
    storageBucket: "peque-web.firebasestorage.app",
    messagingSenderId: "673356201533",
    appId: "1:673356201533:web:1b4ab178a462bd2667b454",
    measurementId: "G-B4WZR9YY90"
};

// ===============================
// INICIALIZAR FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

// ===============================
// CONTENEDOR GALERÍA
// ===============================

const galleryContainer = document.getElementById('galleryContainer');

// ===============================
// IMÁGENES YA EXISTENTES
// ===============================

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


// ===============================
// CREAR IMAGEN
// ===============================

function createGalleryItem(url) {

    // CONTENEDOR
    const item = document.createElement('div');

    item.classList.add('gallery-item');

    // CONTENEDOR IMAGEN
    const imgContainer = document.createElement('div');

    imgContainer.classList.add('img-container');

    // IMAGEN
    const img = document.createElement('img');

    img.src = url;

    img.alt = 'Imagen';

    // ERROR
    img.onerror = () => {

        img.src = 'https://via.placeholder.com/300?text=Error';

    };

    // ZOOM
    imgContainer.addEventListener('click', () => {

        if (imgContainer.classList.contains('enlarged')) {

            closeImage(imgContainer);

        } else {

            openImage(imgContainer);

        }

    });

    // AGREGAR
    imgContainer.appendChild(img);

    item.appendChild(imgContainer);

    galleryContainer.appendChild(item);

}

// ===============================
// ABRIR IMAGEN
// ===============================

function openImage(container) {

    closeAllImages();

    container.classList.add('enlarged');

}

// ===============================
// CERRAR IMAGEN
// ===============================

function closeImage(container) {

    container.classList.remove('enlarged');

}

// ===============================
// CERRAR TODAS
// ===============================

function closeAllImages() {

    document
        .querySelectorAll('.img-container.enlarged')
        .forEach(img => {

            img.classList.remove('enlarged');

        });

}

// ===============================
// CERRAR CLICK FUERA
// ===============================

document.addEventListener('click', (e) => {

    const enlarged =
        document.querySelector('.img-container.enlarged');

    if (
        enlarged &&
        !enlarged.contains(e.target)
    ) {

        closeImage(enlarged);

    }

});

// ===============================
// MOSTRAR IMÁGENES EXISTENTES
// ===============================

imageUrls.forEach(url => {

    createGalleryItem(url);

});

// ===============================
// SUBIR IMÁGENES
// ===============================

const imageUpload =
    document.getElementById('imageUpload');

imageUpload.addEventListener(
    'change',
    async (event) => {

        const files = event.target.files;

        for (const file of files) {

            // VALIDAR
            if (!file.type.startsWith('image/')) continue;

            try {

                // NOMBRE
                const fileName =
                    `${Date.now()}-${file.name}`;

                // STORAGE
                const storageRef = ref(
                    storage,
                    `galeria/${fileName}`
                );

                // SUBIR
                await uploadBytes(
                    storageRef,
                    file
                );

                // URL
                const downloadURL =
                    await getDownloadURL(storageRef);

                // GUARDAR FIRESTORE
                await addDoc(
                    collection(db, "imagenes"),
                    {

                        url: downloadURL,

                        fecha: new Date()

                    }
                );

                // MOSTRAR
                createGalleryItem(downloadURL);

            } catch (error) {

                console.error(
                    "Error al subir:",
                    error
                );

            }

        }

    }
);

// ===============================
// CARGAR IMÁGENES FIREBASE
// ===============================

async function cargarImagenesFirebase() {

    try {

        const querySnapshot =
            await getDocs(
                collection(db, "imagenes")
            );

        querySnapshot.forEach((doc) => {

            const data = doc.data();

            if (data.url) {

                createGalleryItem(data.url);

            }

        });

    } catch (error) {

        console.error(
            "Error cargando Firebase:",
            error
        );

    }

}

// ===============================
// INICIAR
// ===============================

cargarImagenesFirebase();