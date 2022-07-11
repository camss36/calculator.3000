function arearetangulo() {
    var baseret = document.getElementById("arbase").value
    var alturaret = document.getElementById("araltura").value

    var calret = baseret ** alturaret;

    var total4 = calret.toFixed(2);

    document.getElementById('texto4').innerHTML = total4
}