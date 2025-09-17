const phrases = [
    "No tengas lástima de los muertos, Harry. Ten lástima de los vivos, y sobre todo de aquellos que viven sin amor.",
    "Que la Fuerza te acompañe.",
    "La valentía no es la ausencia de miedo, sino la decisión de que algo es más importante que ese miedo.",
    "El corazón es lo que mueve a la gente, y la fuerza, la valentía y la bondad, son las cosas que lo mantienen vivo.",
    "Un príncipe vendrá. Si no viene, un príncipe eres tú."
];

let counter = 0;

const button = document.getElementById('generate-btn');
const addPhraseBtn = document.getElementById('add-phrase-btn');
const phraseContainer = document.getElementById('phrase-container');

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function addPhraseToArray(newPhrase) {
    if (newPhrase && !phrases.includes(newPhrase)) {
        phrases.push(newPhrase);
        window.alert("Nueva frase agregada.");
    }
    return;
}

button.addEventListener('click', () => {
    const randomPhrase = getRandomPhrase();
    phraseContainer.textContent = randomPhrase;
    counter++;
    document.getElementById('counter').textContent = `Frases generadas: ${counter}`;

    const color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
});

addPhraseBtn.addEventListener('click', () => {
    const newPhrase = window.prompt("Ingrese una nueva frase:");
    addPhraseToArray(newPhrase);
});