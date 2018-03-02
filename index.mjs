const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "Mundo",
    "Greek": "κόσμος",
    "French": "monde",
    "German": "Welt",
    "Dutch": "wereld",
    "Korean": "세계"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola",
    "Greek": "γειά σον",
    "French": "Bonjour",
    "German": "Hallo",
    "Dutch": "Hallo",
    "Korean": "여보세요"
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
