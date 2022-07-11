function areatriequilátero() {
    var ladoequi = document.getElementById("ate").value

    var calequi = ((ladoequi ** ladoequi) ** 1.73) /4 

    var total2 = calequi.toFixed(2);

    document.getElementById('texto2').innerHTML = total2
}