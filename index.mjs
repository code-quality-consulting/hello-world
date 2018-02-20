const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "\u043c\u0438\u0440" // мир
};

export function makeGreeter(language) {
    if (language === "Spanish") {
        return function (name = "Mundo") {
            return "\u00A1Hola" + " " + name + "!";
        };
    }
    if (language === "Russian") {
        return function (name = worldInDifferentLanguages.Russian) {
            return "\u041F\u0440\u0438\u0432\u0435\u0442\u0020"
                    + name + "!";
        };
    }
    return function (name = "world") {
        return "Hello " + name + "!";
    };
}
