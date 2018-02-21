const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "\u043c\u0438\u0440", // мир
    "Spanish": "Mundo"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "\u041F\u0440\u0438\u0432\u0435\u0442", //Привет
    "Spanish": "\u00A1Hola" //¡Hola
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
