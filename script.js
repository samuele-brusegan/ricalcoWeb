const overlay = document.getElementById('overlay');
const bloccoInterazione = document.createElement('div');
bloccoInterazione.id = 'blocco-interazione';
document.body.appendChild(bloccoInterazione);

let unlockCombination = ['Control', 'Alt', 'R'];
let pressedKeys = [];
let isBlocked = true;

document.addEventListener('keydown', function(event) {
  if (isBlocked) {
    pressedKeys.push(event.key);
    if (pressedKeys.length > unlockCombination.length) {
      pressedKeys.shift();
    }

    if (pressedKeys.every((key, index) => key.toLowerCase() === unlockCombination[index].toLowerCase())) {
      isBlocked = false;
      // Rimuovi l'overlay e/o il blocco dell'interazione per sbloccare
      overlay.style.display = 'none';
      bloccoInterazione.style.display = 'none';
      // Potresti voler aggiungere qui altre azioni di sblocco
    }
  }
});

// Impedisci il menu contestuale (tasto destro) quando bloccato (opzionale)
document.addEventListener('contextmenu', function(event) {
  if (isBlocked) {
    event.preventDefault();
  }
});

// Blocca ulteriormente le interazioni (opzionale, ma utile)
bloccoInterazione.addEventListener('click', function(event) {
  if (isBlocked) {
    event.stopPropagation();
  }
});

bloccoInterazione.addEventListener('mousedown', function(event) {
  if (isBlocked) {
    event.stopPropagation();
  }
});

// Puoi aggiungere altri listener per eventi del mouse se necessario
