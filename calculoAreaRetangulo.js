function arearetangulo() {
    var baseret = document.getElementById("arbase").value
    var alturaret = document.getElementById("araltura").value

    var calret = baseret ** alturaret;

    texto4.innerHTML= `${calret} o que quer que apareça na tela`
}