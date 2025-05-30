

// main.js

// Importa le funzioni dal modulo imageLoader.js
import { processImageFile, cleanupImageURL } from './imageLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('image-preview');

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; // Prende il primo file selezionato

        const imageUrl = processImageFile(file); // Utilizza la funzione dal modulo

        if (imageUrl) {
            imagePreview.src = imageUrl;         // Imposta la sorgente dell'immagine
            imagePreview.style.display = 'block'; // Rende visibile l'immagine
        } else {
            imagePreview.src = '#';              // Resetta la sorgente
            imagePreview.style.display = 'none'; // Nasconde l'immagine se non valida
        }
    });

    // Opzionale: un modo per pulire l'URL anche manualmente se necessario
    // Ad esempio, un pulsante "Rimuovi immagine"
    // document.getElementById('removeImageBtn').addEventListener('click', () => {
    //     cleanupImageURL();
    //     imagePreview.src = '#';
    //     imagePreview.style.display = 'none';
    //     imageInput.value = ''; // Resetta l'input del file
    // });
});