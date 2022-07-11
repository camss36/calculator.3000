function areaquadrado() {
    var lado1 = document.getElementById("lado").value

    var calarea = lado1 ** lado1

    var total5 = calarea.toFixed(2);

    document.getElementById('texto5').innerHTML = total5

}