let materia1 = ""
let materia2 = ""
let materia4 = ""
let materia5 = ""
let materia6 = ""
let materia7 = ""
let materia8 = ""
let materia9 = ""
let materia10 = ""
let nota1 = 0
let nota2 = 0
let nota3 = 0
let nota4 = 0
let nota5 = 0
let nota6 = 0
let nota7 = 0
let nota8 = 0
let nota9 = 0
let nota10 = 0
let nome = ""
let presenca = 0


nome = prompt("Insira o nome do aluno")
while (nome.length < 5){
    nome = prompt("Insira o nome do aluno")

    if (nome.length < 5){
    alert("O nome está invalido")}
}

materia1 = prompt("Digite a primeira materia")
materia2 = prompt("Digite a segunda materia")
materia3 = prompt("Digite a terceira materia")
materia4 = prompt("Digite a quarta materia")
materia5 = prompt("Digite a quinta materia")
materia6 = prompt("Digite a sexta materia")
materia7 = prompt("Digite a sétima materia")
materia8 = prompt("Digite a oitava materia")
materia9 = prompt("Digite a nona materia")
materia10 = prompt("Digite a décima materia")


nota1 = parseFloat(prompt("Qual a primeira nota?"))
if(nota1 < 0 || nota1 > 10 ){
}

nota2 = parseFloat(prompt("Qual a segunda nota?"))
if(nota2 < 0 || nota2 > 10 ){
}

nota3 = parseFloat(prompt("Qual a terceira nota?"))
if(nota3 < 0 || nota3 > 10 ){
}

nota4 = parseFloat(prompt("Qual a quarta nota?"))
if(nota4 < 0 || nota4 > 10 ){
}

nota5 = parseFloat(prompt("Qual a quinta nota?"))
if(nota5 < 0 || nota5 > 10 ){
}

nota6 = parseFloat(prompt("Qual a sexta nota?"))
if(nota6 < 0 || nota6 > 10 ){
}

nota7 = parseFloat(prompt("Qual a sétima nota?"))
if(nota7 < 0 || nota7 > 10 ){
}

nota8 = parseFloat(prompt("Qual a oitava nota?"))
if(nota8 < 0 || nota8 > 10 ){
}

nota9 = parseFloat(prompt("Qual a nona nota?"))
if(nota9 < 0 || nota9 > 10 ){
}

nota10 = parseFloat(prompt("Qual a décima nota?"))
if(nota10 < 0 || nota10 > 10 ){
}


presenca = parseFloat(prompt("Qual a presença?"))
if(presenca < 0 || presenca > 10 ){
}

let somaNota = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10
let mediaNota = somaNota /2

if(mediaNota >= 8 && presenca >= 6){
    alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença de ${presenca}, portanto aluno aprovado!`)
}

else{
    alert(`A nota do aluno ${nome} é média de ${mediaNota} e sua presença de ${presenca}, portanto aluno reprovado!`) 
}