var botonGenerar = document.getElementById("boton")
var nombre = document.getElementById("nombre");
var incidente = document.getElementById("incidente");

function mostrarBoton() {
    if (nombre.value !== "" && incidente.value !== "") {
        botonGenerar.style.display = "inline-block";
    } else {
        botonGenerar.style.display = "none";
    }
}

function mostrar() {
    nom = nombre.value;
    inc = incidente.value;
    var texto = "Buenos días " + nom + ', como esta?\nLe escribo desde MATEO por el incidente ' + inc + "";
    document.getElementById("texto").innerHTML = texto;
}

botonGenerar.addEventListener("click", mostrar);
nombre.addEventListener("input", mostrarBoton);
incidente.addEventListener("input", mostrarBoton);
