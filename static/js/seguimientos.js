function mostrarDatos() {
    var nombre = document.getElementById("nombre").value;
    var incidente = document.getElementById("incidente").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    
    var texto = "Buenos dias "+ nombre + ', como esta?' +'\n'+ 
        'Te escribo desde MATEO por el incidente'+ incidente;
    
    document.getElementById("texto").innerHTML = texto;
  }
  