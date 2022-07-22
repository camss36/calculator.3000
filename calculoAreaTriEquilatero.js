function areatriequilátero() {
    var ladoequi = document.getElementById("ate").value/100

    var calequi = ((ladoequi * ladoequi) * 1.73) /4;

    var total2 = calequi.toFixed(1);

    document.getElementById('texto2').innerHTML = total2

}

function opentriangulo() {
    if (document.getElementById("containertriequi").style.display = "none") {
       document.getElementById("containertriequi").style.display = "block";
    }
 }
 
 function closetriangulo() {
      if (document.getElementById("calculador").style.display = "block") {
         document.getElementById("calculador").style.display = "none";
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
 
 function abreefecha2() {
    closetriangulo();
    opentriangulo();
 }