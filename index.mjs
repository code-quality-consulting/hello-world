export function makeGreeting(name = "world", language) {
    if (language === "Spanish") {
        name = "Mundo";
        return "\u00A1Hola" + " " + name + "!";
    }
    return "Hello" + " " + name + "!";
}
