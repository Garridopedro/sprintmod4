import prompt from "prompt-sync"

const comando = prompt();

const ordemAlfabetica = () => {
    let css = comando("Digite um elemento CSS:");
    let array = [];
    while (css.toLowerCase() != "sair") {
        array.push(css);
        css = comando("Digite um elemento CSS:")
    }
    return array.sort().join(" " + "/ ");
}

console.log(ordemAlfabetica());