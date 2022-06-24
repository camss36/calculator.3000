function imc() {
    var altura = document.getElementById("altura").value/100
    var peso = document.getElementById("peso").value

    var calimc= altura/peso ** 2;
    if (calimc<18.5) {
        nomedadiv.innerHTML= `${calimc} o que quer que apareça na tela`
    }

    else if (calimc < 24.9) {
        nomedadiv.innerHTML= `${calimc}o que quer que apareça na tela`
    }

    else if (calimc < 29,9) {
        nomedadiv.innerHTML= `${calimc}o que quer que apareça na tela`
    }

    else if (calimc < 34,9) {
        nomedadiv.innerHTML= `${calimc}o que quer que apareça na tela`
    }

    else if (calimc < 40) {
        nomedadiv.innerHTML= `${calimc}o que quer que apareça na tela`
    }
}
