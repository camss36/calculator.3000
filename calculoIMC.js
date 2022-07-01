function imc() {
    var altura = document.getElementById("altura").value/100
    var peso = document.getElementById("peso").value

    var calimc= peso/(altura ** 2);
    if (calimc<18.5) {
        texto1.innerHTML= `${calimc} Você está classificado com magreza`
    }

    else if (calimc < 24.9) {
        texto1.innerHTML= `${calimc}Você está com o peso normal`
    }

    else if (calimc < 29,9) {
        texto1.innerHTML= `${calimc} Você está com Sobrepeso`
    }

    else if (calimc < 34,9) {
        texto1.innerHTML= `${calimc} Você está Obeso`
    }

    else if (calimc < 40) {
        texto1.innerHTML= `${calimc} Você está com Obesidade Morbida`
    }
}
