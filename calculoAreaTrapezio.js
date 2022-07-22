function areatrapezio() {
    var basemaior = document.getElementById("atmaior").value/100
    var basemenor = document.getElementById("atmenor").value/100
    var alturatrap = document.getElementById("alturatrap").value/100

    var caltrap = (basemaior + basemenor) * alturatrap/2

    var total3 = caltrap.toFixed(1);

    document.getElementById('texto3').innerHTML = total3
}

function opentrapezio() {
    if (document.getElementById("containertrapezio").style.display = "none") {
       document.getElementById("containertrapezio").style.display = "block";
    }
 }
 
 function closetrapezio() {
      if (document.getElementById("calculador").style.display = "block") {
         document.getElementById("calculador").style.display = "none";
      }
 
      if (document.getElementById("containertriequi").style.display = "block") {
         document.getElementById("containertriequi").style.display = "none";
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
 
 function abreefecha3() {
    closetrapezio();
    opentrapezio();
 }