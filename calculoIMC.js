function imc() {
    var altura = document.getElementById("altura").value/100
    var peso = document.getElementById("peso").value

    var calimc= peso/(altura * 2);
    var total1= calimc.toFixed(1);

    if (calimc<18.5) {
        texto1.innerHTML= `${total1} Você está classificado com magreza`
    }

    else if (calimc < 24.9) {
        texto1.innerHTML= `${total1}Você está com o peso normal`
    }

    else if (calimc < 29,9) {
        texto1.innerHTML= `${total1} Você está com Sobrepeso`
    }

    else if (calimc < 34,9) {
        texto1.innerHTML= `${total1} Você está Obeso`
    }

    else if (calimc < 40) {
        texto1.innerHTML= `${total1} Você está com Obesidade Morbida`
    }

    
}

function openimc() {
    if (document.getElementById("containerIMC").style.display = "none") {
       document.getElementById("containerIMC").style.display = "block";
    }
 }
 
 function closeimc() {
      if (document.getElementById("containertriequi").style.display = "block") {
         document.getElementById("containertriequi").style.display = "none";
      }
 
      if (document.getElementById("containertrapezio").style.display = "block") {
         document.getElementById("containertrapezio").style.display = "none";
      }
 
      if (document.getElementById("containerretangulo").style.display = "block") {
         document.getElementById("containerretangulo").style.display = "none";
      }
 
      if (document.getElementById("containerquadrado").style.display = "block") {
         document.getElementById("containerquadrado").style.display = "none";
      }
 
      if (document.getElementById("calculador").style.display = "block") {
         document.getElementById("calculador").style.display = "none";
      }
 
 }
 
 function abreefecha() {
    closeimc();
    openimc();
 }
