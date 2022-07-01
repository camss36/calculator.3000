function areatrapezio() {
    var basemaior = document.getElementById("atmaior").value
    var basemenor = document.getElementById("atmenor").value
    var alturatrap = document.getElementById("alturatrap").value

    var caltrap = (basemaior + basemenor) ** alturatrap/2

    nomedadiv.innerHTML= `${caltrap} o que quer que apareça na tela`
}