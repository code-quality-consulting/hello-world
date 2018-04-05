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
    "Hebrew": "עולם",
    "Japanese": "世界",
    "Chinese": "世界",
    "Swahili": "dunia"
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
    "Hebrew": "שלום",
    "Japanese": "こんにちは",
    "Chinese": "你好",
    "Swahili": "Jambo"
};

export function makeGreeter(language) {
    if (language === "Hebrew") {
        return function (name = worldInDifferentLanguages[language]) {
            return rtl + helloInDifferentLanguages[language] + " " + name + "!";
        };
    }

    return function (name = worldInDifferentLanguages[language]) {
        if (language === "Chinese") {
            return helloInDifferentLanguages[language] + name;
        }
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
