export function makeGreeter(language) {
    if (language === "Spanish") {
        return function (name = "Mundo") {
            return "\u00A1Hola" + " " + name + "!";
        };
    }

    return function (name = "world") {
        return "Hello " + name + "!";
    };
}
