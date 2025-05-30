let currentObjectURL = null; // Manteniamo traccia dell'URL corrente per revocarlo

/**
 * Gestisce la selezione di un file immagine e crea un URL temporaneo per la visualizzazione.
 * @param {File} file - L'oggetto File selezionato dall'utente.
 * @returns {string|null} L'URL temporaneo dell'immagine o null se non è un'immagine valida.
 */
export function processImageFile(file) {
    if (!file) {
        console.warn('Nessun file selezionato.');
        return null;
    }

    // Esempio di validazione base: tipo di file e dimensione massima (5MB)
    if (!file.type.startsWith('image/')) {
        alert('Per favore, seleziona un file immagine (es. .jpg, .png, .gif).');
        return null;
    }
    if (file.size > 5 * 1024 * 1024) { // 5 MB
        alert('Il file è troppo grande. Dimensione massima consentita: 5MB.');
        return null;
    }

    // Se c'è un URL precedente, lo revoca per liberare memoria
    if (currentObjectURL) {
        URL.revokeObjectURL(currentObjectURL);
    }

    // Crea un nuovo URL temporaneo per il file selezionato
    currentObjectURL = URL.createObjectURL(file);
    return currentObjectURL;
}

/**
 * Revoca l'ultimo URL temporaneo creato per liberare memoria.
 */
export function cleanupImageURL() {
    if (currentObjectURL) {
        URL.revokeObjectURL(currentObjectURL);
        currentObjectURL = null; // Resetta la variabile
        console.log('URL temporaneo dell\'immagine revocato.');
    }
}

// Aggiungiamo un listener per pulire l'URL quando la pagina viene chiusa o ricaricata
window.addEventListener('beforeunload', cleanupImageURL);