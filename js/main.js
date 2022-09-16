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
$(document).ready(function(){
    document.getElementsByTagName("head")[0].innerHTML += localStorage.getItem('tema')
    $("#bloco1").slideUp()
    $("#maquina2").slideUp()
    $("#maquina3").slideUp()
    $("#maquina4").slideUp()
})

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

var ee2 = document.getElementById("ee2")
var se2 = document.getElementById("se2")

var em2 = document.getElementById("em2")
var sm2 = document.getElementById("sm2")

document.getElementById("emText-maquina2").innerHTML = localStorage.getItem('em2')
document.getElementById("eeText-maquina2").innerHTML = localStorage.getItem('ee2')
document.getElementById("smText-maquina2").innerHTML = localStorage.getItem('sm2')
document.getElementById("seText-maquina2").innerHTML = localStorage.getItem('se2')

if (localStorage.getItem('ee2') == null || localStorage.getItem('em2') == null) {
    $("#inputsEntrada").show()
    $("#Text-maquina2").hide()
}
if (localStorage.getItem('se2')==null || localStorage.getItem('sm2')==null) {
    $("#inputsEntrada1").show()
    $("#Text2-maquina2").hide()
}

$("#salvar1-maquina2").click(function(){
    localStorage.setItem("ee2",ee2.value)
    localStorage.setItem("em2",em2.value)
    $("#inputsEntrada").hide()
    window.location.reload()
})
$("#salvar2-maquina2").click(function(){
    localStorage.setItem("se2",se2.value)
    localStorage.setItem("sm2",sm2.value)
    $("#inputsEntrada1").hide()
    window.location.reload()
})
const motor2 = new hora(localStorage.getItem('em2'),localStorage.getItem('sm2'))
const elevador2 = new hora(localStorage.getItem('ee2'),localStorage.getItem('se2'))
const gg2 = new hora(motor2.menos(),elevador2.menos())
$("#subtracao-maquina2").text(motor2.menos().toFixed('1'))
$("#subtracao2-maquina2").text(elevador2.menos().toFixed('1'))
$("#progress-maquina2").append('<div class="w3-container w3-theme-d5 w3-center w3-round" style="max-width:'+gg2.divisao().toFixed('2').replace('.','')+'%; height:20px;">'+gg2.divisao().toFixed('2').replace('.','').replace('0','')+'%</div>')

var ee4 = document.getElementById("ee4")
var se4 = document.getElementById("se4")

var em4 = document.getElementById("em4")
var sm4 = document.getElementById("sm4")

document.getElementById("emText-maquina4").innerHTML = localStorage.getItem('em4')
document.getElementById("eeText-maquina4").innerHTML = localStorage.getItem('ee4')
document.getElementById("smText-maquina4").innerHTML = localStorage.getItem('sm4')
document.getElementById("seText-maquina4").innerHTML = localStorage.getItem('se4')

if (localStorage.getItem('ee4') == null || localStorage.getItem('em4') == null) {
    $("#inputs-maquina4").show()
    $("#Text-maquina4").hide()
}
if (localStorage.getItem('se4')==null || localStorage.getItem('sm4')==null) {
    $("#inputs2-maquina4").show()
    $("#Text2-maquina4").hide()
}

$("#salvar1-maquina4").click(function(){
    localStorage.setItem("ee4",ee4.value)
    localStorage.setItem("em4",em4.value)
    $("#inputs-maquina4").hide()
    window.location.reload()
})
$("#salvar2-maquina4").click(function(){
    localStorage.setItem("se4",se4.value)
    localStorage.setItem("sm4",sm4.value)
    $("#inputs2-maquina4").hide()
    window.location.reload()
})
const motor4 = new hora(localStorage.getItem('em4'),localStorage.getItem('sm4'))
const elevador4 = new hora(localStorage.getItem('ee4'),localStorage.getItem('se4'))
const gg4 = new hora(motor4.menos(),elevador4.menos())
$("#subtracao-maquina4").text(motor4.menos().toFixed('1'))
$("#subtracao2-maquina4").text(elevador4.menos().toFixed('1'))
$("#progress-maquina4").append('<div class="w3-container w3-theme-d5 w3-center w3-round" style="max-width:'+gg4.divisao().toFixed('2').replace('.','')+'%; height:20px;">'+gg4.divisao().toFixed('2').replace('.','').replace('0','')+'%</div>')

var ee3 = document.getElementById("ee3")
var se3 = document.getElementById("se3")

var em3 = document.getElementById("em3")
var sm3 = document.getElementById("sm3")

document.getElementById("emText-maquina3").innerHTML = localStorage.getItem('em3')
document.getElementById("eeText-maquina3").innerHTML = localStorage.getItem('ee3')
document.getElementById("smText-maquina3").innerHTML = localStorage.getItem('sm3')
document.getElementById("seText-maquina3").innerHTML = localStorage.getItem('se3')

if (localStorage.getItem('ee3') == null || localStorage.getItem('em3') == null) {
    $("#inputsEntrada33").show()
    $("#Text-maquina3").hide()
}
if (localStorage.getItem('se3')==null || localStorage.getItem('sm3')==null) {
    $("#inputsEntrada3").show()
    $("#Text2-maquina3").hide()
}

$("#salvar1-maquina3").click(function(){
    localStorage.setItem("ee3",ee3.value)
    localStorage.setItem("em3",em3.value)
    $("#inputsEntrada3").hide()
    window.location.reload()
})
$("#salvar2-maquina3").click(function(){
    localStorage.setItem("se3",se3.value)
    localStorage.setItem("sm3",sm3.value)
    $("#inputsEntrada3").hide()
    window.location.reload()
})
const motor3 = new hora(localStorage.getItem('em3'),localStorage.getItem('sm3'))
const elevador3 = new hora(localStorage.getItem('ee3'),localStorage.getItem('se3'))
const gg3 = new hora(motor3.menos(),elevador3.menos())
$("#subtracao-maquina3").text(motor3.menos().toFixed('1'))
$("#subtracao2-maquina3").text(elevador3.menos().toFixed('1'))
$("#progress-maquina3").append('<div class="w3-container w3-theme-d5 w3-center w3-round" style="max-width:'+gg3.divisao().toFixed('2').replace('.','')+'%; height:20px;">'+gg3.divisao().toFixed('2').replace('.','').replace('0','')+'%</div>')
