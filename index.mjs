export function makeGreeting(name = "world", language) {
    if (language === "Spanish") {
        const world = "Mundo";
        return "\u00A1Hola" + " " + world + "!";
    }
    return "Hello" + " " + name + "!";
}
