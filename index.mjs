const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "\u043c\u0438\u0440", // мир
    "Spanish": "Mundo",
    "Greek": "\u03BA\u03CC\u03C3\u03BC\u03BF\u03C2" //κόσμος
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "\u041F\u0440\u0438\u0432\u0435\u0442", //Привет
    "Spanish": "\u00A1Hola", //¡Hola
    "Greek": "\u03B3\u03B5\u03B9\u03AC \u03C3\u03BF\u03BD" //γειά σου
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
