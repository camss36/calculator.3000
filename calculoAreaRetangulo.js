function arearetangulo() {
    var baseret = document.getElementById("arbase").value/100
    var alturaret = document.getElementById("araltura").value/100

    var calret = baseret * alturaret;

    var total4 = calret.toFixed(1);

    document.getElementById('texto4').innerHTML = total4
}

function openretangulo() {
    if (document.getElementById("containerretangulo").style.display = "none") {
       document.getElementById("containerretangulo").style.display = "block";
    }
 }
 
 function closeretangulo() {
      if (document.getElementById("containertriequi").style.display = "block") {
         document.getElementById("containertriequi").style.display = "none";
      }
 
      if (document.getElementById("containertrapezio").style.display = "block") {
         document.getElementById("containertrapezio").style.display = "none";
      }
 
      if (document.getElementById("containerIMC").style.display = "block") {
         document.getElementById("containerIMC").style.display = "none";
      }
 
      if (document.getElementById("containerquadrado").style.display = "block") {
         document.getElementById("containerquadrado").style.display = "none";
      }
 
      if (document.getElementById("calculador").style.display = "block") {
         document.getElementById("calculador").style.display = "none";
      }
 
 }
 
 function abreefecha4() {
    closeretangulo();
    openretangulo();
 }
