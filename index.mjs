const rtl = "\u202b";
const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "Mundo",
    "Greek": "κόσμος",
    "French": "monde",
    "German": "Welt",
    "Dutch": "wereld",
    "Korean": "세계",
    "Hebrew": "עולם"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola",
    "Greek": "γειά σον",
    "French": "Bonjour",
    "German": "Hallo",
    "Dutch": "Hallo",
    "Korean": "여보세요",
    "Hebrew": "שלום"
};

export function makeGreeter(language) {
    if (language === "Hebrew") {
        return function (name = worldInDifferentLanguages[language]) {
            return rtl + helloInDifferentLanguages[language] + " " + name + "!";
        };
    }

    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
