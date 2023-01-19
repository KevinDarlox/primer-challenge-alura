function encriptador() {
    var frase = document.getElementById("textoencriptado").value.toLowerCase();


    var textoencriptado =frase.replace(/e/i,"enter")
    var textoencriptado =textoencriptado.replace(/o/i,"ober")
    var textoencriptado =textoencriptado.replace(/i/i,"imes")
    var textoencriptado =textoencriptado.replace(/a/i,"ai")
    var textoencriptado =textoencriptado.replace(/u/i,"ufat")

    document.getElementById("textodesencriptado").innerHTML=textoencriptado
    document.getElementById("textoencriptado").innerHTML=textoencriptado
}

function desencriptador() {
    var frase = document.getElementById("textoencriptado").value.toLowerCase();


    var textoencriptado =frase.replace(/enter/i,"e")
    var textoencriptado =textoencriptado.replace(/ober/i,"o")
    var textoencriptado =textoencriptado.replace(/imes/i,"i")
    var textoencriptado =textoencriptado.replace(/ai/i,"a")
    var textoencriptado =textoencriptado.replace(/ufat/i,"u")

    document.getElementById("textodesencriptado").innerHTML=textoencriptado;
}


function copiar(){

    var Copiado= document.querySelector("#textodesencriptado");
     Copiado.select();
    document.execCommand("copy");
}

function invisible(){
    document.getElementById("busqueda").style.display="none";
    document.getElementById("no-texto").style.display="none";
}
