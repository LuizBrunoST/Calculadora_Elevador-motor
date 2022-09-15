$('#btn-tema').click(function(){
    localStorage.setItem('tema','<link rel="stylesheet" href="css/tema.css">')
    window.location.reload()
})
$('#btn-tema2').click(function(){
    localStorage.setItem('tema','<link rel="stylesheet" href="css/tema2.css">')
    window.location.reload()
})
$('#btn-tema3').click(function(){
    localStorage.setItem('tema','<link rel="stylesheet" href="css/tema3.css">')
    window.location.reload()
})
$('#btn-tema4').click(function(){
    localStorage.setItem('tema','<link rel="stylesheet" href="css/tema4.css">')
    window.location.reload()
})
//<link rel="stylesheet" href="tema.css">
document.getElementsByTagName("head")[0].innerHTML += localStorage.getItem('tema')
class hora{
    constructor(horaEntrada, horaSaida) {
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }
    menos(){
        return this.horaSaida - this.horaEntrada
    }
    divisao(){
        return this.horaSaida / this.horaEntrada
    }
}

/*
em-sm
ee-se
r1/r2

acima de 60% ruasuavel
acima de 65% bom
acima de 70% ótimo

var ee = 3334.5
var se = 3338.2

var em = 5555.5
var sm = 5560.3
*/
var ee = document.getElementById("ee")
var se = document.getElementById("se")

var em = document.getElementById("em")
var sm = document.getElementById("sm")

document.getElementById("emText").innerHTML = localStorage.getItem('em')
document.getElementById("eeText").innerHTML = localStorage.getItem('ee')
document.getElementById("smText").innerHTML = localStorage.getItem('sm')
document.getElementById("seText").innerHTML = localStorage.getItem('se')

if (localStorage.getItem('ee') == null || localStorage.getItem('em') == null) {
    $("#inputs").show()
    $("#Text").hide()
}
if (localStorage.getItem('se')==null || localStorage.getItem('sm')==null) {
    $("#inputs2").show()
    $("#Text2").hide()
}
$("#salvar1").click(function(){
    localStorage.setItem("ee",ee.value)
    localStorage.setItem("em",em.value)
    $("#inputs").hide()
    window.location.reload()
})
$("#salvar2").click(function(){
    localStorage.setItem("se",se.value)
    localStorage.setItem("sm",sm.value)
    $("#inputs2").hide()
    window.location.reload()
})
$("#btn-limpar").click(function(){
    if(confirm("Deseja elimar todos os dados?")==true){
        localStorage.clear()
        window.location.reload()
    }else{
        
    }
})
const motor = new hora(localStorage.getItem('em'),localStorage.getItem('sm'))
const elevador = new hora(localStorage.getItem('ee'),localStorage.getItem('se'))
const gg = new hora(motor.menos(),elevador.menos())
$("#subtracao").text(motor.menos().toFixed('1'))
$("#subtracao2").text(elevador.menos().toFixed('1'))
$("#progress").append('<div class="w3-container w3-theme-d5 w3-center w3-round" style="max-width:'+gg.divisao().toFixed('2').replace('.','')+'%; height:20px;">'+gg.divisao().toFixed('2').replace('.','').replace('0','')+'%</div>')