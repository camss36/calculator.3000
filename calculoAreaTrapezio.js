function areatrapezio() {
    var basemaior = document.getElementById("atmaior").value
    var basemenor = document.getElementById("atmenor").value
    var alturatrap = document.getElementById("alturatrap").value

    var caltrap = (basemaior + basemenor) ** alturatrap/2

    var total3 = caltrap.toFixed(2);

    document.getElementById('texto3').innerHTML = total3
}