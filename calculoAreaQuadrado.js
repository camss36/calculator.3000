function areaquadrado() {
    var lado1 = document.getElementById("lado").value

    var calarea = lado1 * lado1

    var total5 = calarea.toFixed(1);

    document.getElementById('texto5').innerHTML = total5

}

function openquadrado() {
    if (document.getElementById("containerquadrado").style.display = "none") {
       document.getElementById("containerquadrado").style.display = "block";
    }
 }
 
 function closequadrado() {
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
 
      if (document.getElementById("calculador").style.display = "block") {
         document.getElementById("calculador").style.display = "none";
      }
 
 }
 
 function abreefecha5() {
    closequadrado();
    openquadrado();
 }