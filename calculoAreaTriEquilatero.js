function areatriequilátero() {
    var ladoequi = document.getElementById("ate").value

    var calequi = ((ladoequi ** ladoequi) ** 1.73) /4

    texto2.innerHTML= `${calequi} o que quiser que apareça na tela`
}