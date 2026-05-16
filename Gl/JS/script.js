// FIREBASE

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


// HTML

const galleryContainer =
    document.getElementById('galleryContainer');

const uploadBtn =
    document.getElementById('uploadBtn');

const imageUpload =
    document.getElementById('imageUpload');

// IMÁGENES EXISTENTES

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

// CREAR FOTO

function createGalleryItem(url) {

    const item =
        document.createElement('div');

    item.classList.add('gallery-item');

    const imgContainer =
        document.createElement('div');

    imgContainer.classList.add('img-container');

    const img =
        document.createElement('img');

    img.src = url;

    img.alt = 'Imagen';

    // ERROR
    img.onerror = () => {

        img.src =
            'https://via.placeholder.com/300?text=Error';

    };

    // ZOOM
    imgContainer.addEventListener(
        'click',
        () => {

            if (
                imgContainer.classList.contains('enlarged')
            ) {

                imgContainer.classList.remove('enlarged');

            } else {

                document
                    .querySelectorAll('.img-container')
                    .forEach(el => {

                        el.classList.remove('enlarged');

                    });

                imgContainer.classList.add('enlarged');

            }

        }
    );

    imgContainer.appendChild(img);

    item.appendChild(imgContainer);

    galleryContainer.appendChild(item);

}

// MOSTRAR EXISTENTES

imageUrls.forEach(url => {

    createGalleryItem(url);

});

// PIN

uploadBtn.addEventListener('click', () => {

    const pin = prompt(
        '🔒 Ingresa el PIN\n\nPista: es el número de bloqueo de mi teléfono'
    );

    if (pin !== '0817') {

        alert('❌ PIN incorrecto');

        return;

    }

    imageUpload.click();

});

// SUBIR

imageUpload.addEventListener(
    'change',
    async (event) => {

        const files = event.target.files;

        for (const file of files) {

            try {

                const fileName =
                    `${Date.now()}-${file.name}`;

                const storageRef = ref(
                    storage,
                    `galeria/${fileName}`
                );

                await uploadBytes(
                    storageRef,
                    file
                );

                const downloadURL =
                    await getDownloadURL(storageRef);

                await addDoc(
                    collection(db, "imagenes"),
                    {

                        url: downloadURL,

                        fecha: new Date()

                    }
                );

                createGalleryItem(downloadURL);

            } catch (error) {

                console.error(error);

            }

        }

    }
);

// CARGAR FIREBASE

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

        console.error(error);

    }

}

cargarImagenesFirebase();