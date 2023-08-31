const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizcodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptado

}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value)
    mensaje.value = textDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizcodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return stringDesencriptado
}
function btnCopiar(){
    var text = document.querySelector(".mensaje");
    text.select();
    document.execCommand("copy");
    text.blur();
    alert ("Texto copiado al portapapeles: " + text.value);
    text.value = "";
}