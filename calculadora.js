function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

    else{
        document.getElementById('resultado').innerHTML = "Sem números"
    }
}

function opencalculadora() {
    if (document.getElementById("calculador").style.display = "none") {
       document.getElementById("calculador").style.display = "block";
    }
 }
 
 function closecalculadora() {
      if (document.getElementById("containertriequi").style.display = "block") {
         document.getElementById("containertriequi").style.display = "none";
      }
 
      if (document.getElementById("containertrapezio").style.display = "block") {
         document.getElementById("containertrapezio").style.display = "none";
      }
 
      if (document.getElementById("containerIMC").style.display = "block") {
         document.getElementById("containerIMC").style.display = "none";
      }
 
      if (document.getElementById("containerretangulo").style.display = "block") {
         document.getElementById("containerretangulo").style.display = "none";
      }
 
      if (document.getElementById("containerquadrado").style.display = "block") {
         document.getElementById("containerquadrado").style.display = "none";
      }
 
 }
 
 function abreefecha6() {
    closecalculadora();
    opencalculadora();
 }