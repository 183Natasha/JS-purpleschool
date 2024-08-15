const lang = prompt("Выберите язык: EN, RU, ES").toUpperCase();
// console.log(lang);
switch(true){
    case lang == "EN":
        console.log("Hello");
        break;
    case lang == "RU":
        console.log("ПРивет");
        break;
    case lang == "ES":
        console.log("Hola");
        break;
    default:
        console.log("Выберите другой язык");
}