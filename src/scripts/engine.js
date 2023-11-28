// Mapeamento de teclas físicas para teclas do simulador
const pianoKeys = document.querySelectorAll(".piano-keys .key");

const keyMappings = {
    "a": "C3", "w": "Db3", "s": "D3", "e": "Eb3", "d": "E3",
    "f": "F3", "t": "Gb3", "g": "G3", "y": "Ab3", "h": "A3",
    "u": "Bb3", "j": "B3", "k": "C4", "o": "Db4", "l": "D4",
    "p": "Eb4", "ç": "E4", "'": "F4", "]": "Gb4", "\\": "G4",
    "=": "Ab4", ",": "A4", ".": "Bb4", "/": "B4", "z": "C5",
    "x": "Db5", "c": "D5",
};

const playTune = (key, volume = 1.0) => {
    const audio = new Audio(`src/tunes/${key}.mp3`);
    audio.volume = volume;
    audio.play();

    const clickKey = document.querySelector(`[data-key="${key}"]`);
    if (clickKey) {
        clickKey.classList.add("active");
        setTimeout(() => {
            clickKey.classList.remove("active");
        }, 150);
    }
};

// Adiciona eventos de clique para as teclas do simulador
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => {
        const volumeControl = document.getElementById("volumeControl");
        const volume = volumeControl ? volumeControl.value : 1.0;
        playTune(key.dataset.key, volume);
    });
});

// Adiciona evento de pressionar teclas físicas
document.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toLowerCase();
    const pianoKey = keyMappings[pressedKey];

    if (pianoKey) {
        const volumeControl = document.getElementById("volumeControl");
        const volume = volumeControl ? volumeControl.value : 1.0;
        playTune(pianoKey, volume);
    }
});

// Adiciona evento para alterações no controle de volume
const volumeControl = document.getElementById("volumeControl");
if (volumeControl) {
    volumeControl.addEventListener("input", () => {
        // Atualize o volume conforme necessário
        const volume = volumeControl.value;
        // Você pode querer exibir visualmente o valor do volume ou fazer outras ações aqui
    });
}

// ... (seu código existente)

// Adiciona evento para alterações no checkbox "Teclas"
const showKeysCheckbox = document.getElementById("showKeysCheckbox");
if (showKeysCheckbox) {
    showKeysCheckbox.addEventListener("change", () => {
        const pianoKeys = document.querySelectorAll(".piano-keys .key span");

        pianoKeys.forEach((key) => {
            key.style.visibility = showKeysCheckbox.checked ? "hidden" : "visible";
        });
    });
}




