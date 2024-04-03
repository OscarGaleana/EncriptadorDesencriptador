const CampoTexto= document.querySelector("#TextoEncriptado");
const CampoMensaje= document.querySelector("#CampoMensaje");

const MatrizCode= [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
    const texto=Encriptar(CampoTexto.value);
    CampoMensaje.value=texto;
    var muñeco = document.getElementById("Muñeco");
    muñeco.style.display = "none"; // Oculta la imagen
    var elemento = document.getElementById("Busca");
    elemento.style.display = "none";
}

function Encriptar(FraseEncriptada){
    for(let i=0; i<MatrizCode.length; i++){
        if(FraseEncriptada.includes(MatrizCode[i][0])){
            FraseEncriptada=FraseEncriptada.replaceAll(
                MatrizCode[i][0],
                MatrizCode[i][1]
            );
        }
    }
    return FraseEncriptada;
}

function btnDesencriptar(){
    const texto=Desencriptar(CampoTexto.value);
    CampoMensaje.value=texto;
}

function Desencriptar(FraseEncriptada){
    for(let i=0; i<MatrizCode.length; i++){
        if(FraseEncriptada.includes(MatrizCode[i][1])){
            FraseEncriptada=FraseEncriptada.replaceAll(
                MatrizCode[i][1],
                MatrizCode[i][0]
            );
        }
    }
    return FraseEncriptada;
}

function crecerBoton(elemento) {
    elemento.classList.add('boton-crecido');
    setTimeout(function() {
        elemento.classList.remove('boton-crecido');
    }, 300); // Restablecer después de 300 milisegundos (0.3 segundos)
}
CampoTexto.addEventListener("input", function() {this.value = this.value.toLowerCase();})