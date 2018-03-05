const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "Mundo",
    "Greek": "κόσμος",
    "French": "monde",
    "German": "Welt",
    "Dutch": "wereld",
    "Chinese": "世界"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola",
    "Greek": "γειά σον",
    "French": "Bonjour",
    "German": "Hallo",
    "Dutch": "Hallo",
    "Chinese": "你好"
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        if (language === "Chinese") {
            return helloInDifferentLanguages[language] + name;
        }
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
